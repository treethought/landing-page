import React, { Component, PropTypes } from 'react'
import renderIf from 'render-if'
import StandardTextField from './../standard-text-field'
import FlatButton from 'material-ui/FlatButton'

class LoginPage extends Component {
  render () {
    const { redirectError } = this.props

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
          />
        </div>

        <FlatButton
          className='gc-std-btn login-page__login-code-btn'
          label='send me a login code'
        />

        <a className='login-page__lil-link'>Already have an access code?</a>
      </div>
    )
  }
}

const { string } = PropTypes
LoginPage.propTypes = {
  redirectError: string
}

export default LoginPage
