import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import renderIf from 'render-if'
import Hint from './../hint'
import TextField from './../../standard-text-field'
import ga from './../../../services/ga'

class CreateContactsForm extends Component {
  constructor (props) {
    super(props)
    const { content } = props
    const contactFields = ['name', 'relationship', 'phone'].map(name => ({
      name,
      label: content[`${name}Label`]
    }))
    this.state = {
      hintShown: false,
      contactFields
    }
  }

  componentDidMount () {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    window.onbeforeunload = (e) => {
      const confirmationMessage = '\o/'
      e.returnValue = confirmationMessage
      return confirmationMessage
    }

    window.onunload = (e) => {
      const { contacts, user } = this.props
      ga.triggerEvent('leave-create-contacts-form', { user, contacts })()
      this.removeEventListeners()
    }
  }

  removeEventListeners () {
    window.onbeforeunload = null
    window.onunload = null
  }

  componentWillUnmount () {
    this.removeEventListeners()
  }

  onContinueClick () {
    this.removeEventListeners()
    this.props.saveContacts()
  }

  showHint () {
    this.setState({hintShown: true})
  }

  isDesktop () {
    return window.innerWidth > 640
  }

  render () {
    const {
      content, contacts, addContact, removeContact, consentToContactIs,
      setContact, saveContacts, requestInProgress
    } = this.props

    return (
      <form className='sign-up-page__form'>
        {renderIf(this.state.hintShown)(
          <div style={{position: 'relative', width: this.isDesktop() ? '50%' : '0'}}>
            <Hint text={content.hintText(contacts.length)} confirmLabelText={content.hintConfirmLabelText} />
          </div>
        )}

        <div className='sign-up-page__form-fields-container' ref='formFields'>
          {contacts.map((contact, i) => (
            <div className='sign-up-page__contact-fields-container' key={contact.tmpId}>
              {renderIf(i > 0)(
                <h3 className='sign-up-page__additional-contact-header'>{content.additionalContactLabel}</h3>
              )}

              {this.state.contactFields.map(({ name, label, onBlur, onFocus }, j) => (
                <TextField
                  key={j}
                  onFocus={this.showHint.bind(this)}
                  onChange={setContact(contact.tmpId, name).bind()}
                  name={name}
                  labelText={label}
                />
              ))}

              {renderIf(contacts.length > 1)(
                <div className='sign-up-page__remove-contact-btn' onClick={removeContact(contact.tmpId)}>&times;</div>
              )}
            </div>
          ))}

          <div className='sign-up-page__add-contact-btn' onClick={addContact}>+ {content.addContactBtnLabel}</div>

          <div className='sign-up-page__checkbox-container'>
            <Checkbox
              label={content.consentToContactLabel(contacts.length)}
              defaultChecked={true}
              onCheck={consentToContactIs()}
              style={{textAlign: 'left'}}
              iconStyle={{width: '32px', height: '32px', fill: '#40B097'}}
              labelStyle={{fontSize: window.innerWidth > 640 ? '18px' : '16px', color: '#4A4A4A', lineHeight: '24px', fontWeight: '300'}}
            />

          </div>

          <FlatButton
            className='gc-std-btn sign-up-page__form-continue-btn'
            style={{ backgroundColor: '#40B097' }}
            label={content.continueBtnLabel}
            onClick={this.onContinueClick.bind(this)}
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
