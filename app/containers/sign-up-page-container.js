import React, { Component, PropTypes } from 'react'
import update from 'react-addons-update'
import { SignUpPage } from '../components'
import { postUser } from '../services/api'
import cookie from 'react-cookie'

class SignUpPageContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      requestInProgress: false,
      formStage: 1,
      recaptchaSitekey: '6Lc7NxQUAAAAAIZCaPCuSa-9_N2tjZcCik5647lj',
      user: {
        ageVerified: true,
        referredByCode: cookie.load('referredByCode', { path: '/' }),
        errors: {}
      },
      contacts: []
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

  setUser (name) {
    return (value) => {
      this.setState(update(this.state, {
        user: { [name]: { $set: value } }
      }))
    }
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
