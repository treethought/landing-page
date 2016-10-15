import React, {Component, PropTypes} from 'react'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import renderIf from 'render-if'
import Hint from './../hint'
import StandardTextField from './../../standard-text-field'
import every from 'lodash.every'

class CreateContactsForm extends Component {
  constructor (props) {
    super(props)
    this.popup = this.popup.bind(this)
    const {content} = props
    this.state = {
      hintShown: false,
      contactFields: [
        {name: 'name', label: content.nameLabel},
        {name: 'relationship', label: content.relationshipLabel},
        {name: 'phone', label: content.phoneLabel}
      ]
    }
  }

  componentDidMount () {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    window.addEventListener('beforeunload', this.popup)
    window.addEventListener('unload', () => { window.removeEventListener('beforeunload', this.popup) })
  }

  componentWillUnmount () {
    window.removeEventListener('beforeunload', this.popup)
  }

  popup (e) {
    let confirmationMessage = '\o/'
    e.returnValue = confirmationMessage
    return confirmationMessage
  }

  showHint () {
    this.setState({hintShown: true})
  }

  isDesktop () {
    return window.innerWidth > 640
  }

  continueBtnIsDisabled () {
    const { requestInProgress, contacts } = this.props
    const allInformationCompleted = every(contacts, (contact) => {
      const { name, relationship, phone } = contact.data.attributes
      return name && relationship && phone
    })
    return requestInProgress || !allInformationCompleted
  }

  render () {
    const {content} = this.props

    return (
      <form className='sign-up-page__form'>
        {renderIf(this.state.hintShown)(
          <div style={{position: 'relative', width: this.isDesktop() ? '50%' : '0'}}>
            <Hint text={content.hintText(this.props.contacts.length)} confirmLabelText={content.hintConfirmLabelText}/>
          </div>
        )}

        <div className='sign-up-page__form-fields-container' ref='formFields'>
          {this.props.contacts.map((contact, i) => (
            <div className='sign-up-page__contact-fields-container' key={contact.tmpId}>
              {renderIf(i > 0)(
                <h3 className='sign-up-page__additional-contact-header'>{content.additionalContactLabel}</h3>
              )}

              {this.state.contactFields.map((field, j) => (
                <StandardTextField
                  key={j}
                  onFocus={this.showHint.bind(this)}
                  onChange={this.props.setContact(contact.tmpId, field.name)}
                  name={field.name}
                  labelText={field.label}
                  errorText={contact.errors.attributes[field.name]}
                />
              ))}

              {renderIf(this.props.contacts.length > 1)(
                <div className='sign-up-page__remove-contact-btn' onClick={this.props.removeContact(contact)}>&times;</div>
              )}
            </div>
          ))}

          {<div className='sign-up-page__add-contact-btn' onClick={this.props.addContact}>+ {content.addContactBtnLabel}</div>}

          {<div className='sign-up-page__checkbox-container'>
            <Checkbox
              label={content.consentToContactLabel(this.props.contacts.length)}
              defaultChecked={true}
              onCheck={this.props.consentToContactIs()}
              style={{textAlign: 'left'}}
              iconStyle={{width: '32px', height: '32px', fill: '#40B097'}}
              labelStyle={{fontSize: window.innerWidth > 640 ? '18px' : '16px', color: '#4A4A4A', lineHeight: '24px', fontWeight: '300'}}
            />

          </div>}

          <FlatButton
            className='gc-std-btn sign-up-page__form-continue-btn'
            label={content.continueBtnLabel}
            onClick={this.props.saveContacts}
            disabled={this.continueBtnIsDisabled()}
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
  requestInProgress: bool
}

export default CreateContactsForm
