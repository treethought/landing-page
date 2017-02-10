import React, { Component, PropTypes } from 'react'
import { TextField, Checkbox, DateField } from '../../index'
import FlatButton from 'material-ui/FlatButton'
import some from 'lodash.some'
import ga from './../../../services/ga'
import renderIf from 'render-if'
import Hint from './../hint'
import update from 'react-addons-update'
import { lengthOfObject } from '../../../services/utils'
import values from 'lodash.values'

class CreateContactsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hintShown: { name: false, dateOfBirth: false, fact: false }
    }
  }

  showHint (name) {
    this.setState(update(this.state, {
      hintShown: { [name]: { $set: true } }
    }))
  }

  render () {
    const {
      requestInProgress, contacts, toggleContactNotificationAllowed, setContact,
      toggleContactDateField
    } = this.props
    const { hintShown } = this.state

    return (
      <form className='sign-up-page__form'>
        {renderIf(lengthOfObject(contacts.list) === 1 && some(hintShown))(
          <div className='sign-up-page__form-hints-container'>
            <Hint
              text='This is the person we will text to alert them if you get arrested.'
              confirmLabelText='GOT IT'
              top='14px'
              show={hintShown.name}
            />
            <Hint
              text='Good Call will use this information only to identify and verify your emergency contact when you call into the hotline.'
              confirmLabelText='GOT IT'
              top='110px'
              show={hintShown.dateOfBirth}
            />
            <Hint
              text='The fact should be something only you and others who are close to them would know. Ex. His favorite sport is basketball.'
              confirmLabelText='GOT IT'
              top='28px'
              show={hintShown.fact}
            />
          </div>
        )}

        {values(contacts.list).map(({ tmpId, dateFieldShown, dateOfBirth }, i) => (
          <div className='sign-up-page__form-fields-container' key={i}>
            <TextField
              labelText='First name, last name'
              onFocus={this.showHint.bind(this, 'name')}
              onChange={setContact(tmpId, 'name')}
            />

            <TextField
              labelText='Relationship to them'
              onChange={setContact(tmpId, 'relationship')}
            />

            <TextField
              labelText="Emergency contact's phone number"
              onChange={setContact(tmpId, 'phone')}
            />

            <div className='sign-up-page__text-btn' onClick={toggleContactDateField(tmpId)}>
              {dateFieldShown
                ? 'Don\'t know their birthday? Answer another question.'
                : 'Don\'t know what neighborhood they grew up in? Answer another question.'
              }
            </div>

            {dateFieldShown ? (
              <DateField
                onClick={this.showHint.bind(this, 'dateOfBirth')}
                label='Date of Birth'
                onChange={setContact(tmpId, 'dateOfBirth')}
              />
            ) : (
              <TextField
                labelText='What neighborhood did they grow up in?'
                onFocus={this.showHint.bind(this, 'dateOfBirth')}
                onChange={setContact(tmpId, 'neighborhood')}
              />
            )}

            <TextField
              labelText='What is a unique fact about them?'
              onFocus={this.showHint.bind(this, 'fact')}
              onChange={setContact(tmpId, 'fact')}
            />

            <div className='sign-up-page__text-btn'>+ Add another contact</div>

            <Checkbox
              className='sign-up-page__create-contacts-form-checkbox'
              label='Let us contact this person now to let them know you signed up and confirm their information.'
              onCheck={toggleContactNotificationAllowed}
            />

            <FlatButton
              className='gc-std-btn sign-up-page__form-continue-btn'
              style={{ backgroundColor: '#40B097' }}
              label='finish'
              disabled={requestInProgress}
            />
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
  toggleContactDateField: func
}

export default CreateContactsForm
