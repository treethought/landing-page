import request from 'superagent'
import config from '../config'
import camelize from 'camelize'
import snakeize from 'snakeize'
const { isArray } = Array
import locale from './locale'

export function postUser ({ name, emailOrPhone, referredByCode }) {
  return makeRequest({
    method: 'POST',
    path: '/users',
    params: { user: { name, emailOrPhone, referredByCode } }
  })
}

// TODO: get locale from cookies
function makeRequest ({ method = 'GET', path, params = {} }) {
  return new Promise((resolve, reject) => {
    const requestPromise = request(method, config.apiBaseUrl + path)
      .send(snakeize(params))
      .set('Accept', 'applicaton/json')
      .set('LOCALE', locale.get())
    requestPromise.then(({ body }) => {
      let camelizedBody = isArray(body)
        ? body.map(camelize)
        : camelize(body)
      resolve(camelizedBody)
    }, err => {
      const errors = camelize(err.response.body.errors)
      reject(errors)
    })
  })
}
