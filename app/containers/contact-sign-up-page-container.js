import React, { Component } from 'react'
import update from 'react-addons-update'
import uuid from 'node-uuid'
import extend from 'extend'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'
import each from 'lodash.foreach'
import { postContact, notifyUsers } from '../services/api'
import { ContactSignUpPage } from '../components'

class ContactSignUpPageContainer extends Component {
  constructor (props) {
    super(props)
    const initialUserTmpId = uuid.v4()
    this.state = {
      requestInProgress: false,
      formStage: 0,
      recaptchaSitekey: '6Lc7NxQUAAAAAIZCaPCuSa-9_N2tjZcCik5647lj',
      contact: { errors: {} },
      users: [ { tmpId: initialUserTmpId, errors: {} } ]
    }
  }

  setContact (prop) {
    return value => {
      this.setState(update(this.state, {
        contact: { [prop]: { $set: value } }
      }))
    }
  }

  createContact () {
    this.setState({ requestInProgress: true })
    postContact(this.state.contact, res => {
      this.setState({ requestInProgress: false, formStage: 1 })
    }, errors => {
      this.setState(update(this.state, {
        contact: { errors: { $set: errors } },
        requestInProgress: { $set: false }
      }))
    })
  }

  addUser () {
    const tmpId = uuid.v4()
    this.setState(update(this.state, {
      users: { $push: [{ tmpId, errors: {} }] }
    }))
  }

  deleteUser (tmpId) {
    return () => {
      const newUsers = this.state.users.filter(u => u.tmpId !== tmpId)
      this.setState(update(this.state, { users: { $set: newUsers } }))
    }
  }

  setUser (tmpId, prop) {
    return value => {
      const newUsers = this.state.users.map(u => (
        u.tmpId === tmpId ? extend(u, { [prop]: value }) : u
      ))
      this.setState(update(this.state, { users: { $set: newUsers } }))
    }
  }

  notifyUsers () {
    const { contact, users } = this.state
    notifyUsers({ contactName: contact.name, users }, res => {
      const referralCode = cookie.load('referralCode', { path: '/' })
      cookie.remove('referralCode', { path: '/' })
      browserHistory.push({ pathname: '/sign-up/success', query: { referralCode } })
    }, errors => {
      const newUsers = this.state.users.map(u => (
        extend(u, { errors: errors[u.tmpId] || {} })
      ))
      this.setState(extend(this.state, { users: newUsers }))
    })
  }

  render () {
    const { route, locale } = this.props
    const { content } = route

    return (
      <ContactSignUpPage
        {...this.state}
        content={content}
        setContact={this.setContact.bind(this)}
        createContact={this.createContact.bind(this)}
        addUser={this.addUser.bind(this)}
        deleteUser={this.deleteUser.bind(this)}
        setUser={this.setUser.bind(this)}
        notifyUsers={this.notifyUsers.bind(this)}
        locale={locale}
      />
    )
  }
}

export default ContactSignUpPageContainer
