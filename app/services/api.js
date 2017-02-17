import request from 'superagent'
import config from '../config'
import camelize from '../services/camelize'
import snakeize from 'snakeize'
const { isArray } = Array
import locale from './locale'
import cookie from 'react-cookie'
import values from 'lodash.values'

export function postUser ({ name, emailOrPhone, referredByCode, recaptchaResponse }) {
  return makeRequest({
    method: 'POST',
    path: '/users',
    params: { user: { name, emailOrPhone, referredByCode, recaptchaResponse } }
  }).then(res => {
    cookie.save('token', res.token.value, { path: '/' })
    cookie.save('referralCode', res.user.referralCode, { path: '/' })
  })
}

export function postContacts ({ contacts, userName }) {
  const { notificationAllowed, list } = contacts
  const token = cookie.load('token', { path: '/' })
  return makeRequest({
    method: 'POST',
    path: '/contacts',
    params: { contacts: { notificationAllowed, token, list: values(list), userName } }
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
        ? body.map(el => camelize(body, '_'))
        : camelize(body, '_')
      resolve(camelizedBody)
    }, err => {
      const errors = camelize(err.response.body.errors, '_')
      reject(errors)
    })
  })
}
