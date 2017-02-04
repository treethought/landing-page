import React, { Component, PropTypes } from 'react'
import update from 'react-addons-update'
import { SignUpPage } from '../components'
import { postUser } from '../services/api'
import cookie from 'react-cookie'

class SignUpPageContainer extends Component {
  constructor () {
    super()
    this.state = {
      requestInProgress: false,
      formStage: 0,
      user: {
        ageVerified: true,
        referredByCode: cookie.load('referredByCode', { path: '/' }),
        errors: {}
      },
      contacts: []
    }
  }

  createUser () {
    const { name, emailOrPhone, referredByCode } = this.state.user
    this.setState({ ...this.state, requestInProgress: true })
    postUser({ name, emailOrPhone, referredByCode }).then(res => {
      this.setState({ ...this.state, requestInProgress: false, formStage: 1 })
    }, errors => {
      this.setState(update(this.state, {
        user: { errors: { $set: errors } },
        requestInProgress: { $set: false }
      }))
    })
  }

  setUser (name) {
    return (value) => {
      this.setState(update(this.state, {
        user: { [name]: { $set: value } }
      }))
    }
  }

  render () {
    const { location, route } = this.props
    const { content } = route
    return (
      <SignUpPage
        {...this.state}
        location={location}
        content={content}
        setUser={this.setUser.bind(this)}
        createUser={this.createUser.bind(this)}
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
