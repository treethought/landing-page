import React, { Component, PropTypes } from 'react'
import LoginPage from './../components/login-page'
import fetcher from './../services/fetcher'
import config from './../config'

class LoginPageContainer extends Component {

  constructor (props) {
    super(props)
    const { location } = props
    this.state = {
      redirectError: location.state ? location.state.errorMessage : null,
      emailOrPhone: '',
      requestInProgress: false,
      accessTokenSent: false,
      alreadyHasAnAccessCode: false
    }
  }

  setEmailOrPhone (e) {
    this.setState({emailOrPhone: e.target.value})
  }

  isValidEmail (emailOrPhone) {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(emailOrPhone)
  }

  isValidPhone (emailOrPhone) {
    let trimmedPhoneDigits = emailOrPhone.trim().replace(/\D/g, '')
    let phoneDigits = trimmedPhoneDigits[0] === '1' ? trimmedPhoneDigits.substring(1) : trimmedPhoneDigits
    return phoneDigits.length === 10
  }

  emailOrPhoneIsValid () {
    const { emailOrPhone } = this.state
    return this.isValidEmail(emailOrPhone) || this.isValidPhone(emailOrPhone)
  }

  setAlreadyHasAccessCode () {
    this.setState({alreadyHasAnAccessCode: true})
  }

  getAccessToken () {
    const { emailOrPhone } = this.state
    let body = {type: 'users', attributes: {}}
    if (this.isValidEmail(emailOrPhone)) {
      body.attributes.email = emailOrPhone
    } else if (this.isValidPhone(emailOrPhone)) {
      body.attributes.phone = emailOrPhone
    }
    fetcher({
      method: 'POST',
      url: `${config.apiBaseUrl}/users/access_token`,
      body: body,
      beforeRequest: this.setState.call(this, {requestInProgress: true})
    }).then((res) => {
      this.setState({requestInProgress: false, accessTokenSent: true})
    })
  }

  render () {
    return (
      <LoginPage
        requestInProgress={this.state.requestInProgress}
        redirectError={this.state.redirectError}
        setEmailOrPhone={this.setEmailOrPhone.bind(this)}
        emailOrPhone={this.state.emailOrPhone}
        emailOrPhoneIsValid={this.emailOrPhoneIsValid()}
        getAccessToken={this.getAccessToken.bind(this)}
        accessTokenSent={this.state.accessTokenSent}
        alreadyHasAnAccessCode={this.state.alreadyHasAnAccessCode}
        setAlreadyHasAccessCode={this.setAlreadyHasAccessCode.bind(this)}
      />
    )
  }
}

const { object } = PropTypes
LoginPageContainer.propTypes = {
  route: object,
  location: object
}

export default LoginPageContainer
