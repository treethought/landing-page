import React, { Component, PropTypes } from 'react'
import renderIf from 'render-if'
import StandardTextField from './../standard-text-field'
import FlatButton from 'material-ui/FlatButton'

class LoginPage extends Component {
  emailOrPhoneIsValid () {
    const { emailOrPhone } = this.props
    const isValidEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(emailOrPhone)
    let trimmedPhoneDigits = emailOrPhone.trim().replace(/\D/g, '')
    let phoneDigits = trimmedPhoneDigits[0] === '1' ? trimmedPhoneDigits.substring(1) : trimmedPhoneDigits
    const isValidPhone = phoneDigits.length === 10
    return isValidEmail || isValidPhone
  }

  render () {
    const { redirectError, setEmailOrPhone, requestInProgress, getAccessCode } = this.props

    return (
      <div className='login-page'>
        {renderIf(redirectError)(
          <div>ERROR: { redirectError }</div>
        )}

        <h1 className='login-page__header'>Log in to update your account</h1>

        <h2 className='login-page__subheader'>tell us your email or phone number</h2>

        <div className='login-page__text-field-container'>
          <StandardTextField
            labelText='Email or Cell number (xxx) xxx-xxxx'
            onChange={setEmailOrPhone}
          />
        </div>

        <FlatButton
          className='gc-std-btn login-page__login-code-btn'
          label='send me a login code'
          onClick={getAccessCode}
          disabled={requestInProgress || !this.emailOrPhoneIsValid()}
        />

        <a className='login-page__lil-link'>Already have an access code?</a>
      </div>
    )
  }
}

const { string, func, bool } = PropTypes
LoginPage.propTypes = {
  redirectError: string,
  setEmailOrPhone: func,
  emailOrPhone: string,
  requestInProgress: bool,
  getAccessCode: func
}

export default LoginPage
