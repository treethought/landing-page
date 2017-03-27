import React, { Component, PropTypes } from 'react'
import { TextField, Checkbox, DateField } from '../../index'
import FlatButton from 'material-ui/FlatButton'
import some from 'lodash.some'
import renderIf from 'render-if'
import Hint from './../hint'
import update from 'react-addons-update'
import { lengthOfObject, scrollToTop, isDesktop } from '../../../services/utils'
import values from 'lodash.values'
import { triggerEvent } from '../../../services/ga'

class CreateContactsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hintShown: { name: false, info: false }
    }
  }

  componentDidMount () {
    const { contacts } = this.props
    setTimeout(scrollToTop, 300)
    window.onbeforeunload = (e) => ''
    window.onunload = (e) => {
      triggerEvent('leave-create-contacts-form', { contacts })()
    }
  }

  componentWillUnmount () {
    window.onbeforeunload = null
    window.onunload = null
  }

  showHint (name) {
    this.setState(update(this.state, {
      hintShown: { [name]: { $set: true } }
    }))
  }

  continueBtnIsDisabled () {
    return this.props.requestInProgress || some(this.props.contacts.list, (contact) => {
      const { name, phone, dateOfBirth, neighborhood, fact } = contact
      return !name || !phone || !(dateOfBirth || neighborhood) || !fact
    })
  }

  render () {
    const {
      contacts, toggleContactNotificationAllowed, setContact, toggleContactDateField,
      addContact, deleteContact, createContacts, content
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

        {values(contacts.list).map(({ tmpId, dateFieldShown, dateOfBirth, errors }, i, arr) => (
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

            {dateFieldShown ? (
              <div className='sign-up-page__dont-know-container'>
                <DateField
                  onClick={this.showHint.bind(this, 'info')}
                  labelText={content.dateOfBirthLabel}
                  onChange={setContact(tmpId, 'dateOfBirth')}
                  content={content.dateField}
                />
                <span className='sign-up-page__dont-know-question'>{content.dontKnowBirthdayQuestion}</span>&nbsp;
                <span className='sign-up-page__text-btn' onClick={toggleContactDateField(tmpId)}>{content.dontKnowBirthdayAction}</span>
              </div>
            ) : (
              <div className='sign-up-page__dont-know-container'>
                <TextField
                  labelText={content.neighborhoodLabel}
                  onFocus={this.showHint.bind(this, 'info')}
                  onChange={setContact(tmpId, 'neighborhood')}
                />
                <span className='sign-up-page__dont-know-question'>{content.dontKnowNeighborhoodQuestion}</span>&nbsp;
                <span className='sign-up-page__text-btn' onClick={toggleContactDateField(tmpId)}>{content.dontKnowNeighborhoodAction}</span>
              </div>
            )}

            <TextField
              labelText='What is a unique fact about them?'
              onFocus={this.showHint.bind(this, 'info')}
              onChange={setContact(tmpId, 'fact')}
            />

            {renderIf(i === arr.length - 1)(
              <div>
                <div className='sign-up-page__text-btn' onClick={addContact}>
                  + {content.addContactBtnLabel}
                </div>

                <Checkbox
                  className='sign-up-page__create-contacts-form-checkbox'
                  label={content.consentToContactLabel(arr.length)}
                  onCheck={toggleContactNotificationAllowed}
                />

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
  toggleContactDateField: func,
  addContact: func,
  deleteContact: func,
  createContacts: func
}

export default CreateContactsForm
