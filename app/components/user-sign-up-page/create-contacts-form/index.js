import React, { Component, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import some from 'lodash.some'
import values from 'lodash.values'
import renderIf from 'render-if'
import update from 'react-addons-update'
import pick from 'lodash.pick'
import mapObject from 'object.map'
import { TextField/* , Checkbox */ } from '../../index'
import Hint from './../hint'
import { lengthOfObject, scrollToTop, isDesktop } from '../../../services/utils'
import { trackRegistrationEvent } from '../../../services/ga'

class CreateContactsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hintShown: { name: false, info: false }
    }
  }

  handleDropoff () {
    const formData = values(this.props.contacts.list).map(contact => (
      mapObject(pick(contact,
        ['name', 'phone', 'fact']
      ), attrs => !!attrs)
    ))
    trackRegistrationEvent('leave-create-contacts-form', formData)
  }

  componentDidMount () {
    setTimeout(scrollToTop, 300)
    window.onbeforeunload = () =>
      this.handleDropoff()
  }

  componentWillUnmount () {
    this.handleDropoff()
    window.onbeforeunload = null
  }

  showHint (name) {
    this.setState(update(this.state, {
      hintShown: { [name]: { $set: true } }
    }))
  }

  continueBtnIsDisabled () {
    return this.props.requestInProgress || some(this.props.contacts.list, (contact) => {
      const { name, phone, fact } = contact
      return !name || !phone || !fact
    })
  }

  render () {
    const {
      contacts/* , toggleContactNotificationAllowed */, setContact, addContact,
      deleteContact, createContacts, content
    } = this.props
    const { hintShown } = this.state
    const hintsContainerIsShown = isDesktop
      ? lengthOfObject(contacts.list) === 1 && some(hintShown)
      : some(hintShown)

    return (
      <form className='sign-up-page__form'>
        {renderIf(hintsContainerIsShown)(
          <div className='sign-up-page__create-contacts-form-hints-container'>
            <Hint
              text={content.nameHintText}
              confirmLabelText={content.hintConfirmLabelText}
              top='14px'
              show={hintShown.name}
            />
            <Hint
              text={content.infoHintText}
              confirmLabelText={content.hintConfirmLabelText}
              top='41px'
              show={hintShown.info}
            />
          </div>
        )}

        {values(contacts.list).map(({ tmpId, errors }, i, arr) => (
          <div className='sign-up-page__form-fields-container' key={tmpId}>
            <h3 className='sign-up-page__create-contacts-form-fields-header'>
              <span>{content.contactFormGroupHeader} #{i + 1}</span>
              {renderIf(arr.length > 1)(
                <span className='sign-up-page__create-contacts-form-delete-btn' onClick={deleteContact(tmpId)}>&times;</span>
              )}
            </h3>

            <TextField
              labelText={content.nameLabel}
              onFocus={this.showHint.bind(this, 'name')}
              onChange={setContact(tmpId, 'name')}
              errorText={errors.name}
            />

            <TextField
              labelText={content.phoneLabel}
              onChange={setContact(tmpId, 'phone')}
              errorText={errors.phone}
            />

            <TextField
              labelText={content.uniqueFact}
              onFocus={this.showHint.bind(this, 'info')}
              onChange={setContact(tmpId, 'fact')}
            />

            {renderIf(i === arr.length - 1)(
              <div>
                <div className='sign-up-page__text-btn sign-up-page__add-contact-btn' onClick={addContact}>
                  + {content.addContactBtnLabel}
                </div>

                {/* <Checkbox
                  className='sign-up-page__create-contacts-form-checkbox'
                  label={content.consentToContactLabel(arr.length)}
                  onCheck={toggleContactNotificationAllowed}
                /> */}

                <FlatButton
                  className='gc-std-btn sign-up-page__form-continue-btn'
                  style={{ backgroundColor: '#40B097' }}
                  label={content.finishBtnLabel}
                  disabled={this.continueBtnIsDisabled()}
                  onClick={createContacts}
                />
              </div>
            )}
          </div>
        ))}
      </form>
    )
  }
}

const { object, func, bool } = PropTypes
CreateContactsForm.propTypes = {
  content: object,
  contacts: object,
  requestInProgress: bool,
  toggleContactNotificationAllowed: func,
  setContact: func,
  addContact: func,
  deleteContact: func,
  createContacts: func
}

export default CreateContactsForm
