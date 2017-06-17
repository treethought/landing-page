import React, { Component } from 'react'
import { object } from 'prop-types'
import update from 'react-addons-update'
import { UserSignUpPage } from '../components'
import { postUser, postContacts } from '../services/api'
import cookie from 'react-cookie'
import uuid from 'node-uuid'
const { assign } = Object
import { browserHistory } from 'react-router'
import each from 'lodash.foreach'

class UserSignUpPageContainer extends Component {
  constructor (props) {
    super(props)
    const initialContactTmpId = uuid.v4()
    this.state = {
      requestInProgress: false,
      formStage: 0,
      recaptchaSitekey: '6Lc7NxQUAAAAAIZCaPCuSa-9_N2tjZcCik5647lj',
      user: {
        ageVerified: false,
        referredByCode: cookie.load('referredByCode', { path: '/' }),
        recaptchaResponse: null,
        errors: {}
      },
      contacts: {
        notificationAllowed: false,
        list: {
          [initialContactTmpId]: {
            tmpId: initialContactTmpId,
            errors: {}
          }
        }
      }
    }
  }

  setUser (prop) {
    return (value) => {
      this.setState(update(this.state, {
        user: { [prop]: { $set: value } }
      }))
    }
  }

  createUser () {
    this.setState({ requestInProgress: true })
    postUser(this.state.user, res => {
      this.setState({ requestInProgress: false, formStage: 1 })
    }, errors => {
      this.setState(update(this.state, {
        user: { errors: { $set: errors } },
        requestInProgress: { $set: false }
      }))
    })
  }

  toggleContactNotificationAllowed () {
    this.setState(update(this.state, {
      contacts: { notificationAllowed: { $apply: v => !v } }
    }))
  }

  setContact (tmpId, prop) {
    return (value) => {
      this.setState(update(this.state, {
        contacts: { list: { [tmpId]: { [prop]: { $set: value } } } }
      }))
    }
  }

  addContact () {
    const tmpId = uuid.v4()
    this.setState(update(this.state, {
      contacts: { list: { $merge: { [tmpId]: { tmpId, errors: {} } } } }
    }))
  }

  deleteContact (tmpId) {
    return () => {
      let newList = assign({}, this.state.contacts.list)
      delete newList[tmpId]
      this.setState(update(this.state, { contacts: { list: { $set: newList } } }))
    }
  }

  createContacts () {
    postContacts({
      contacts: this.state.contacts,
      userName: this.state.user.name
    }, res => {
      const referralCode = cookie.load('referralCode', { path: '/' })
      cookie.remove('referralCode', { path: '/' })
      browserHistory.push({ pathname: '/sign-up/success', query: { referralCode } })
    }, errors => {
      each(errors, (errs, tmpId) => {
        this.setState(update(this.state, {
          contacts: { list: { [tmpId]: { errors: { $set: errs } } } }
        }))
      })
    })
  }

  render () {
    const { location, route } = this.props
    const { content, locale } = route
    return (
      <UserSignUpPage
        {...this.state}
        location={location}
        content={content}
        locale={locale}
        setUser={this.setUser.bind(this)}
        createUser={this.createUser.bind(this)}
        toggleContactNotificationAllowed={this.toggleContactNotificationAllowed.bind(this)}
        setContact={this.setContact.bind(this)}
        addContact={this.addContact.bind(this)}
        deleteContact={this.deleteContact.bind(this)}
        createContacts={this.createContacts.bind(this)}
      />
    )
  }
}

UserSignUpPageContainer.propTypes = {
  route: object,
  location: object
}

export default UserSignUpPageContainer
