import request from 'superagent'
import config from '../config'
import camelize from 'camelize'
import snakeize from 'snakeize'
const { isArray } = Array
import locale from './locale'
import cookie from 'react-cookie'

export function postUser ({ name, emailOrPhone, referredByCode, recaptchaResponse }) {
  return makeRequest({
    method: 'POST',
    path: '/users',
    params: { user: { name, emailOrPhone, referredByCode, recaptchaResponse } }
  }).then(res => {
    console.log({res})
    cookie.save('token', res.token.value, { path: '/' })
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
