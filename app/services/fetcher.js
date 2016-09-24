// THANKS @ahdinosaur for this remnant of the past!!!!

import camelize from 'camelize'
import snakeize from 'snakeize'
import Url from 'url'
import assign from 'lodash.assign'
import isPlainObject from 'lodash.isplainobject'
import cookie from 'react-cookie'
import objectPath from 'object-path'

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
  options.headers.append('id', cookie.load('userId'))
  options.headers.append('access_token', cookie.load('accessToken'))

  let res
  // fetch!
  return fetch(url, options)
    .then(function (response) {
      res = response
      return res.json()
    })
    .then(function (rawJson) {
      let json
      if (res.status < 400) {
        json = camelize(rawJson).data
      } else {
        let errors = {}
        rawJson.errors.forEach((error) => {
          objectPath.set(errors, error.source.pointer.slice(1).replace(/\//g, '.'), error.detail)
        })
        json = {errors: camelize(errors.data)}
      }

      return {status: res.status, json: json}
    })
}
