import React, { Component, PropTypes } from 'react'
import { TextField, SelectField, Checkbox } from '../../index'
import FlatButton from 'material-ui/FlatButton'
import range from 'lodash.range'
import rangeRight from 'lodash.rangeRight'
import some from 'lodash.some'
import ga from './../../../services/ga'
import renderIf from 'render-if'
import Hint from './../hint'
import update from 'react-addons-update'

class CreateContactsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dateFieldShown: true,
      hintShown: { name: false, dateOfBirth: false, fact: false }
    }
  }

  toggleDateField () {
    if (this.dateFieldShown) {
      // TODO: clear the contacts date of birth value
    }
    this.setState({ ...this.state, dateFieldShown: !this.state.dateFieldShown })
  }

  showHint (name) {
    this.setState(update(this.state, {
      hintShown: { [name]: { $set: true } }
    }))
  }

  render () {
    // TODO: move into separate component
    const DateField = ({ onClick }) => {
      const dateOptions = {
        months: range(1, 13).map(n => ({label: n, value: n})),
        days: range(1, 32).map(n => ({label: n, value: n})),
        years: rangeRight(1916, 1999).map(n => ({label: n, value: n}))
      }

      return (
        <div className='sign-up-page__date-select-container' onClick={onClick}>
          <label className='sign-up-page__date-select-label'>Date of Birth</label>

          <div className='sign-up-page__date-select-fields-container'>
            <SelectField width='75px' label='Month' menuItems={dateOptions.months} className='sign-up-page__form-select-date-field' />
            <SelectField width='60px' label='Day' menuItems={dateOptions.days} className='sign-up-page__form-select-date-field' />
            <SelectField width='65px' label='Year' menuItems={dateOptions.years} className='sign-up-page__form-select-date-field' />
          </div>
        </div>
      )
    }

    const { requestInProgress } = this.props
    const { dateFieldShown, hintShown } = this.state

    return (
      <form className='sign-up-page__form'>
        {renderIf(some(hintShown))(
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

        <div className='sign-up-page__form-fields-container'>
          <TextField name='name' labelText='First name, last name' onFocus={this.showHint.bind(this, 'name')} />
          <TextField name='relationship' labelText='Relationship to them' />
          <TextField name='phone' labelText="Emergency contact's phone number" />

          <div className='sign-up-page__text-btn' onClick={this.toggleDateField.bind(this)} >
            {dateFieldShown
              ? 'Don\'t know their birthday? Answer another question.'
              : 'Don\'t know what neigborhood they grew up in? Answer another question.'
            }

          </div>

          {dateFieldShown
            ? (<DateField onClick={this.showHint.bind(this, 'dateOfBirth')} />)
            : (<TextField name='neighborhood' labelText='What neighborhood did they grow up in?' onFocus={this.showHint.bind(this, 'dateOfBirth')} />)
          }

          <TextField name='fact' labelText='What is a unique fact about them?' onFocus={this.showHint.bind(this, 'fact')} />

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
