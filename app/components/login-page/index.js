import React, { Component, PropTypes } from 'react'
import renderIf from 'render-if'
import StandardTextField from './../standard-text-field'
import FlatButton from 'material-ui/FlatButton'

class LoginPage extends Component {
  reloadPage () {
    window.location.reload()
  }

  render () {
    const {
      redirectError,
      setEmailOrPhone,
      emailOrPhoneIsValid,
      requestInProgress,
      getAccessToken,
      accessTokenSent,
      alreadyHasAnAccessCode,
      setAlreadyHasAccessCode,
      logIn,
      setAccessToken,
      accessToken
    } = this.props

    return (
      <div className='login-page'>
        {renderIf(redirectError)(
          <div className='login-page__error-banner'>
            { redirectError }<br />
            please login to continue.
          </div>
        )}

        <div className='login-page__content-container'>
          <h1 className='login-page__header'>Log in to update your account</h1>

          {renderIf(!alreadyHasAnAccessCode)(
            <h2 className='login-page__subheader'>
              { accessTokenSent ? 'we sent you a login code, enter it below' : 'tell us your email or phone number'}
            </h2>
          )}

          <div className='login-page__text-field-container'>
            {renderIf(!alreadyHasAnAccessCode)(
              <StandardTextField
                className='login-page__text-field'
                labelText='Email or Cell number (xxx) xxx-xxxx'
                onChange={setEmailOrPhone}
              />
            )}
            {renderIf(accessTokenSent || alreadyHasAnAccessCode)(
              <StandardTextField
                className='login-page__text-field'
                labelText='Access Code'
                onChange={setAccessToken}
              />
            )}
          </div>

          {renderIf(!(accessTokenSent || alreadyHasAnAccessCode))(
            <div>
              <FlatButton
                className='gc-std-btn login-page__login-code-btn'
                label='send me a login code'
                onClick={getAccessToken}
                disabled={requestInProgress || !emailOrPhoneIsValid}
              />

              <a className='login-page__lil-link' onClick={setAlreadyHasAccessCode(true)}>
                Already have an access code?
              </a>
            </div>
          )}

          {renderIf(accessTokenSent || alreadyHasAnAccessCode)(
            <div>
              <FlatButton
                className='gc-std-btn login-page__login-code-btn'
                label='login'
                onClick={logIn}
                disabled={accessToken.length === 0}
              />

              <a className='login-page__lil-link' onClick={this.reloadPage}>
                Request another access code
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const { string, func, bool } = PropTypes
LoginPage.propTypes = {
  redirectError: string,
  setEmailOrPhone: func,
  emailOrPhone: string,
  emailOrPhoneIsValid: bool,
  requestInProgress: bool,
  getAccessToken: func,
  accessTokenSent: bool,
  alreadyHasAnAccessCode: bool,
  setAlreadyHasAccessCode: func,
  logIn: func,
  setAccessToken: func,
  accessToken: string
}

export default LoginPage
