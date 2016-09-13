// THANKS @ahdinosaur for this remnant of the past!!!!

import snakeize from 'snakeize'
import camelize from 'camelize'
import Url from 'url'
import assign from 'lodash.assign'
import isPlainObject from 'lodash.isplainobject'

export default function fetcher (options) {
  options = options || {}

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
    options.body = JSON.stringify(
      snakeize(options.body)
    )
    options.headers.append('content-type', 'application/json')
  }

  // support credentials default as 'same-origin'
  options.credentials = options.credentials || 'same-origin'

  // accept json response
  options.headers.append('accept', 'application/json')

  let res
  // fetch!
  return fetch(url, options)
    .then(function (response) {
      res = response
      return res.json()
    })
    .then(function (json) {
      return {
        status: res.status,
        json: json
      }
    })
}
