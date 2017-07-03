import React, { Component, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import renderIf from 'render-if'
import Recaptcha from 'react-grecaptcha'
import pick from 'lodash.pick'
import mapObject from 'object.map'
import Hint from './../hint'
import { Checkbox, TextField } from './../../index.js'
import { trackRegistrationEvent } from './../../../services/ga'

class CreateUserForm extends Component {
  constructor (props) {
    super(props)
    this.state = { hintShown: false }
  }

  handleDropoff () {
    const formData = mapObject(pick(this.props.user,
      ['ageVerified', 'recaptchaResponse', 'name', 'emailOrPhone']
    ), val => !!val)
    trackRegistrationEvent('user', 'leave-1', formData)
  }

  componentDidMount () {
    window.onbeforeunload = () =>
      this.handleDropoff()
  }

  componentWillUnmount () {
    this.handleDropoff()
    window.onbeforeunload = null
  }

  showHint () {
    this.setState({ hintShown: true })
  }

  continueBtnIsDisabled () {
    const { user, requestInProgress } = this.props
    const { name, emailOrPhone, ageVerified, recaptchaResponse } = user
    return requestInProgress || !(name && emailOrPhone && ageVerified && recaptchaResponse)
  }

  render () {
    const { content, setUser, createUser, user, locale, recaptchaSitekey } = this.props
    const { hintShown } = this.state

    const userFields = ['name', 'emailOrPhone'].map(name => ({
      name,
      label: content[`${name}Label`],
      onFocus: this.showHint.bind(this),
      onChange: setUser(name)
    }))

    return (
      <form className='sign-up-page__form'>
        {renderIf(hintShown)(
          <div className='sign-up-page__form-hints-container'>
            <Hint text={content.hintText} confirmLabelText={content.hintConfirmLabelText} top='13px' show />
          </div>
        )}

        <div className='sign-up-page__form-fields-container'>
          {userFields.map(({ name, onFocus, onChange, label }, i) => (
            <TextField
              key={i}
              name={name}
              onFocus={onFocus}
              onChange={onChange}
              labelText={label}
              errorText={user.errors[name]}
            />
          ))}

          <Checkbox
            label={content.verifyAgeText}
            onCheck={setUser('ageVerified')}
            className='sign-up-page__create-user-form-checkbox'
            defaultChecked={false}
          />

          <Recaptcha
            className='sign-up-page__recaptcha'
            sitekey={recaptchaSitekey}
            callback={setUser('recaptchaResponse')}
            expiredCallback={setUser('recaptchaResponse').bind(null)}
            locale={locale}
          />

          <FlatButton
            className='gc-std-btn sign-up-page__form-continue-btn sign-up-page__create-user-form-continue-btn'
            style={{ backgroundColor: '#40B097' }}
            label={content.continueBtnLabel}
            onClick={createUser}
            disabled={this.continueBtnIsDisabled()}
          />

          <p className='sign-up-page__form-continue-btn-terms-text' dangerouslySetInnerHTML={{__html: content.continueBtnTermsText}} />
        </div>
      </form>
    )
  }
}

const { object, bool, func, string } = PropTypes
CreateUserForm.propTypes = {
  content: object,
  hintShown: bool,
  setUser: func,
  user: object,
  createUser: func,
  locale: string,
  recaptchaSitekey: string,
  requestInProgress: bool
}

export default CreateUserForm
