import React, { Component, PropTypes } from 'react'
import { TextField, Checkbox, DateField } from '../../index'
import FlatButton from 'material-ui/FlatButton'
import some from 'lodash.some'
import renderIf from 'render-if'
import Hint from './../hint'
import update from 'react-addons-update'
import { lengthOfObject, scrollToTop, isDesktop } from '../../../services/utils'
import values from 'lodash.values'

class CreateContactsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hintShown: { name: false, dateOfBirth: false, fact: false }
    }
  }

  componentDidMount () {
    scrollToTop()
    window.onbeforeunload = (e) => ''
  }

  componentWillUnmount () {
    window.onbeforeunload = null
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
      addContact, deleteContact, createContacts
    } = this.props
    const { hintShown } = this.state
    const hintsContainerIsShown = isDesktop
      ? lengthOfObject(contacts.list) === 1 && some(hintShown)
      : some(hintShown)

    return (
      <form className='sign-up-page__form'>
        {renderIf(hintsContainerIsShown)(
          <div className='sign-up-page__form-hints-container'>
            <Hint
              text='This is the person we will alert if you get arrested.'
              confirmLabelText='GOT IT'
              top='14px'
              show={hintShown.name}
            />
            <Hint
              text='We will use this information only to identify and verify your emergency contact if you call into the hotline. Make sure you remember this.'
              confirmLabelText='GOT IT'
              top='41px'
              show={hintShown.dateOfBirth}
            />
            <Hint
              text='The fact should be something only you and others who are close to them would know. Ex. His favorite sport is basketball.'
              confirmLabelText='GOT IT'
              top='43px'
              show={hintShown.fact}
            />
          </div>
        )}

        {values(contacts.list).map(({ tmpId, dateFieldShown, dateOfBirth, errors }, i, arr) => (
          <div className='sign-up-page__form-fields-container' key={tmpId}>
            <TextField
              labelText='First name, last name'
              onFocus={this.showHint.bind(this, 'name')}
              onChange={setContact(tmpId, 'name')}
              errorText={errors.name}
            />

            <TextField
              labelText="Emergency contact's phone number"
              onChange={setContact(tmpId, 'phone')}
              errorText={errors.phone}
            />

            {dateFieldShown ? (
              <DateField
                onClick={this.showHint.bind(this, 'dateOfBirth')}
                labelText="Emergency Contact's Date of Birth"
                onChange={setContact(tmpId, 'dateOfBirth')}
              />
            ) : (
              <TextField
                labelText='What neighborhood did they grow up in?'
                onFocus={this.showHint.bind(this, 'dateOfBirth')}
                onChange={setContact(tmpId, 'neighborhood')}
              />
            )}

            <div className='sign-up-page__text-btn' onClick={toggleContactDateField(tmpId)}>
              {dateFieldShown
                ? 'Don\'t know their birthday? Answer another question.'
                : 'Don\'t know? Answer another question.'
              }
            </div>

            <TextField
              labelText='What is a unique fact about them?'
              onFocus={this.showHint.bind(this, 'fact')}
              onChange={setContact(tmpId, 'fact')}
            />

            {renderIf(arr.length > 1)(
              <div className='sign-up-page__text-btn' onClick={deleteContact(tmpId)}>
                - Delete contact
              </div>
            )}

            {renderIf(i === arr.length - 1)(
              <div>
                <div className='sign-up-page__text-btn' onClick={addContact}>
                  + Add another contact
                </div>

                <Checkbox
                  className='sign-up-page__create-contacts-form-checkbox'
                  label={`Let us contact ${arr.length > 1 ? 'these people' : 'this person'} now to let them know you signed up and confirm their information.`}
                  onCheck={toggleContactNotificationAllowed}
                />

                <FlatButton
                  className='gc-std-btn sign-up-page__form-continue-btn'
                  style={{ backgroundColor: '#40B097' }}
                  label='finish'
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
