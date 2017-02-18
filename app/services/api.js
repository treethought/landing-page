import request from 'superagent'
import config from '../config'
import camelize from '../services/camelize'
import snakeize from 'snakeize'
const { isArray } = Array
import locale from './locale'
import cookie from 'react-cookie'
import values from 'lodash.values'
import { triggerEvent } from './ga'

export function postUser (user, onSuccess, onError) {
  return makeRequest({
    method: 'POST',
    path: '/users',
    params: { user }
  }).then(res => {
    cookie.save('token', res.token.value, { path: '/' })
    cookie.save('referralCode', res.user.referralCode, { path: '/' })
    triggerEvent('create-user-form-submit-success')()
    onSuccess(res)
  }, errors => {
    triggerEvent('create-user-form-submit-error', errors)()
    onError(errors)
  })
}

export function postContacts ({ contacts, userName }, onSuccess, onError) {
  const { notificationAllowed, list } = contacts
  const token = cookie.load('token', { path: '/' })
  return makeRequest({
    method: 'POST',
    path: '/contacts',
    params: { contacts: { notificationAllowed, token, list: values(list), userName } }
  }).then(res => {
    triggerEvent('create-contacts-form-submit-success')()
    cookie.remove('token', { path: '/' })
    onSuccess(res)
  }, errors => {
    triggerEvent('create-contacts-form-submit-error', errors)()
    onError(errors)
  })
}

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
