import React, { Component, PropTypes } from 'react'
import { TextField, SelectField, Checkbox } from '../../index'
import FlatButton from 'material-ui/FlatButton'
import range from 'lodash.range'
import rangeRight from 'lodash.rangeRight'
import ga from './../../../services/ga'
import renderIf from 'render-if'
import Hint from './../hint'

class CreateContactsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showDateField: true
    }
  }

  toggleDateField () {
    if (this.showDateField) {
      // clear the contacts date of birth value
    }
    this.setState({ ...this.state, showDateField: !this.state.showDateField })
  }

  render () {
    const DateField = () => {
      const dateOptions = {
        months: range(1, 13).map(n => ({label: n, value: n})),
        days: range(1, 32).map(n => ({label: n, value: n})),
        years: rangeRight(1916, 1999).map(n => ({label: n, value: n}))
      }

      return (
        <div>
          <div
            className='sign-up-page__text-btn'
            onClick={this.toggleDateField.bind(this)}
          >
            Don't know their birthday? Answer another question.
          </div>

          <div className='sign-up-page__date-select-container'>
            <label className='sign-up-page__date-select-label'>Date of Birth</label>

            <div className='sign-up-page__date-select-fields-container'>
              <SelectField width='75px' label='Month' menuItems={dateOptions.months} className='sign-up-page__form-select-date-field' />
              <SelectField width='60px' label='Day' menuItems={dateOptions.days} className='sign-up-page__form-select-date-field' />
              <SelectField width='65px' label='Year' menuItems={dateOptions.years} className='sign-up-page__form-select-date-field' />
            </div>
          </div>
        </div>
      )
    }

    const { requestInProgress } = this.props
    const { showDateField } = this.state

    return (
      <form className='sign-up-page__form'>
        {renderIf(true)(
          <div className='sign-up-page__form-hints-container'>
            <Hint text='This is the person we will text to alert them if you get arrested.' confirmLabelText='GOT IT' top='14px' />
            <Hint text='Good Call will use this information only to identify and verify your emergency contact when you call into the hotline.' confirmLabelText='GOT IT' top='80px' />
            <Hint text='The fact should be something only you and others who are close to them would know. Ex. His favorite sport is basketball.' confirmLabelText='GOT IT' top='28px' />
          </div>
        )}

        <div className='sign-up-page__form-fields-container'>
          <TextField name='name' labelText='First name, last name' />
          <TextField name='relationship' labelText='Relationship to them' />
          <TextField name='phone' labelText="Emergency contact's phone number" />

          { showDateField
            ? (<DateField />)
            : (<TextField name='neighborhood' labelText='What neighborhood did they grow up in?' />)
          }

          <TextField name='fact' labelText='What is a unique fact about them?' />

          <div className='sign-up-page__text-btn'>+ Add another contact</div>

          <Checkbox className='sign-up-page__create-contacts-form-checkbox' label='Let us contact this person now to let them know you signed up and confirm their information.' />

          <FlatButton
            className='gc-std-btn sign-up-page__form-continue-btn'
            style={{ backgroundColor: '#40B097' }}
            label='finish'
            disabled={requestInProgress}
          />
        </div>
      </form>
    )
  }
}

const { object, array, func, bool } = PropTypes
CreateContactsForm.propTypes = {
  content: object,
  contacts: array,
  setContact: func,
  removeContact: func,
  addContact: func,
  consentToContactIs: func,
  saveContacts: func,
  requestInProgress: bool,
  user: object
}

export default CreateContactsForm
