import React, { Component, PropTypes } from 'react'
import update from 'react-addons-update'
import { SignUpPage } from '../components'
import { postUser, postContacts } from '../services/api'
import cookie from 'react-cookie'
import uuid from 'node-uuid'
const { assign } = Object

class SignUpPageContainer extends Component {
  constructor (props) {
    super(props)
    const initialContactTmpId = uuid.v4()
    this.state = {
      requestInProgress: false,
      formStage: 0,
      recaptchaSitekey: '6Lc7NxQUAAAAAIZCaPCuSa-9_N2tjZcCik5647lj',
      user: {
        ageVerified: true,
        referredByCode: cookie.load('referredByCode', { path: '/' }),
        errors: {}
      },
      contacts: {
        notificationAllowed: true,
        list: {
          [initialContactTmpId]: {
            tmpId: initialContactTmpId,
            dateFieldShown: true
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
    const { name, emailOrPhone, referredByCode, recaptchaResponse } = this.state.user
    this.setState({ ...this.state, requestInProgress: true })
    postUser({ name, emailOrPhone, referredByCode, recaptchaResponse }).then(res => {
      this.setState({ ...this.state, requestInProgress: false, formStage: 1 })
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

  toggleContactDateField (tmpId) {
    return () => {
      const dateFieldShown = this.state.contacts.list[tmpId].dateFieldShown
      this.setState(update(this.state, {
        contacts: {
          list: {
            [tmpId]: {
              dateFieldShown: { $set: !dateFieldShown },
              [dateFieldShown ? 'dateOfBirth' : 'neighborhood']: { $set: '' }
            }
          }
        }
      }))
    }
  }

  addContact () {
    const tmpId = uuid.v4()
    this.setState(update(this.state, {
      contacts: { list: { $merge: { [tmpId]: { tmpId, dateFieldShown: true } } } }
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
    postContacts(this.state.contacts).then(res => {
      console.log({ res })
      // destroy token
      // redirect to success page with referralCode in query params
    }, errors => {
      console.log({ errors })
      // add errors to respective contacts
    })
  }

  render () {
    const { location, route } = this.props
    const { content, locale } = route
    return (
      <SignUpPage
        {...this.state}
        location={location}
        content={content}
        locale={locale}
        setUser={this.setUser.bind(this)}
        createUser={this.createUser.bind(this)}
        toggleContactNotificationAllowed={this.toggleContactNotificationAllowed.bind(this)}
        setContact={this.setContact.bind(this)}
        toggleContactDateField={this.toggleContactDateField.bind(this)}
        addContact={this.addContact.bind(this)}
        deleteContact={this.deleteContact.bind(this)}
        createContacts={this.createContacts.bind(this)}
      />
    )
  }
}

const { object } = PropTypes
SignUpPageContainer.propTypes = {
  route: object,
  location: object
}

export default SignUpPageContainer
