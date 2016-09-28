// THANKS @ahdinosaur for this remnant of the past!!!!

import camelize from 'camelize'
import snakeize from 'snakeize'
import Url from 'url'
import assign from 'lodash.assign'
import isPlainObject from 'lodash.isplainobject'
import cookie from 'react-cookie'
import objectPath from 'object-path'
import {browserHistory} from 'react-router'

export default function fetcher (options) {
  options = options || {}

  // if desired, run any callbacks before request is made
  if (options.beforeRequest) { options.beforeRequest() }

  options.headers = options.headers || new Headers()

  let { url, query } = options
  delete options.url
  delete options.query
  if (url) {
    // support snake options.query
    let urlObj = Url.parse(url, true)
    urlObj.search = null // otherwise will override query
    urlObj.query = assign({}, urlObj.query, snakeize(query))
    url = Url.format(urlObj)
  }

  // support snake options.body
  if (isPlainObject(options.body)) {
    options.body = JSON.stringify({data: options.body})
    options.headers.append('Content-Type', 'application/vnd.api+json')
  }

  // support credentials default as 'same-origin'
  options.credentials = options.credentials || 'same-origin'

  // accept json response
  options.headers.append('accept', 'application/json')

  // append auth headers, if they exist
  options.headers.append('USER_ID', cookie.load('userId', true))
  options.headers.append('ACCESS_TOKEN', cookie.load('accessToken', true))

  let fetchPromise = new Promise((resolve, reject) => {
    let res
    // fetch!
    fetch(url, options).then((response) => {
      res = response
      return res.json()
    }).then((rawJson) => {
      if (res.status < 400) {
        resolve({status: res.status, json: camelize(rawJson)})
      } else {
        let errors = {}
        rawJson.errors.forEach((error) => {
          objectPath.set(errors, error.source.pointer.slice(1).replace(/\//g, '.'), error.detail)
        })
        let json = {errors: camelize(errors.data)}
        reject({status: res.status, json: json})

        if (res.status === 401) {
          browserHistory.push({
            pathname: '/login',
            state: {errorMessage: json.errors.relationships.accessToken}
          })
        }
      }
    })
  })

  return fetchPromise
}
