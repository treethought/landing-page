import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Recaptcha from 'react-grecaptcha'
import { object, bool, func, string } from 'prop-types'
import Hint from '../../user-sign-up-page/hint'
import update from 'react-addons-update'
import values from 'lodash.values'
import some from 'lodash.some'
// import pick from 'lodash.pick'
// import mapObject from 'object.map'
import { Checkbox, TextField } from './../../index.js'
// import { trackRegistrationEvent } from './../../../services/ga'

class CreateContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = { hintShown: { name: false, fact: false } }
  }

  showHint (name) {
    this.setState(update(this.state, {
      hintShown: { [name]: { $set: true } }
    }))
  }

  // handleDropoff () {
  //   const formData = mapObject(pick(this.props.contact,
  //     ['ageVerified', 'recaptchaResponse', 'name', 'emailOrPhone']
  //   ), val => !!val)
  //   trackRegistrationEvent('leave-create-user-form', formData)
  // }

  // componentDidMount () {
  //   window.onbeforeunload = () =>
  //     this.handleDropoff()
  // }
  //
  // componentWillUnmount () {
  //   this.handleDropoff()
  //   window.onbeforeunload = null
  // }

  continueBtnIsDisabled () {
    const { contact, requestInProgress } = this.props
    const { name, email, phone, ageVerified, recaptchaResponse, fact } = contact
    return requestInProgress || !(name && email && phone && fact && ageVerified && recaptchaResponse)
  }

  render () {
    const { content, setContact, createContact, contact, locale, recaptchaSitekey } = this.props
    const { hintShown } = this.state
    const hintsContainerIsShown = some(values(hintShown))

    const contactFields = [
      { name: 'name', onFocus: this.showHint.bind(this, 'name') },
      { name: 'phone' },
      { name: 'email' },
      { name: 'fact', onFocus: this.showHint.bind(this, 'fact') }
    ].map(({ name, onFocus }) => ({
      name,
      label: content[`${name}Label`],
      onChange: setContact(name),
      onFocus: onFocus
    }))

    return (
      <div>
        <h2 className='sign-up-page__form-subheader'>{content.header}</h2>

        <form className='sign-up-page__form'>
          {hintsContainerIsShown && <div className='sign-up-page__create-user-form-hints-container'>
            <Hint
              text={content.nameHintText}
              confirmLabelText={content.hintConfirmLabelText}
              top='14px'
              show={hintShown.name}
            />
            <Hint
              text={content.factHintText}
              confirmLabelText={content.hintConfirmLabelText}
              top='63px'
              show={hintShown.fact}
            />
          </div>}

          <div className='sign-up-page__form-fields-container'>
            {contactFields.map(({ name, onFocus, onChange, label }, i) => (
              <TextField
                key={i}
                name={name}
                onFocus={onFocus}
                onChange={onChange}
                labelText={label}
                errorText={contact.errors[name]}
              />
            ))}

            <Checkbox
              label={content.verifyAgeText}
              onCheck={setContact('ageVerified')}
              className='sign-up-page__create-user-form-checkbox'
              defaultChecked={false}
            />

            <Recaptcha
              className='sign-up-page__recaptcha'
              sitekey={recaptchaSitekey}
              callback={setContact('recaptchaResponse')}
              expiredCallback={setContact('recaptchaResponse').bind(null)}
              locale={locale}
            />

            <FlatButton
              className='gc-std-btn sign-up-page__form-continue-btn sign-up-page__create-user-form-continue-btn'
              style={{ backgroundColor: '#40B097' }}
              label={content.continueBtnLabel}
              onClick={createContact}
              disabled={this.continueBtnIsDisabled()}
            />

            <p className='sign-up-page__form-continue-btn-terms-text' dangerouslySetInnerHTML={{__html: content.continueBtnTermsText}} />
          </div>
        </form>
      </div>
    )
  }
}

CreateContactForm.propTypes = {
  content: object,
  setContact: func,
  contact: object,
  createContact: func,
  locale: string,
  recaptchaSitekey: string,
  requestInProgress: bool
}

export default CreateContactForm
