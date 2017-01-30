import React, {Component, PropTypes} from 'react'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import renderIf from 'render-if'
import Hint from './../hint'
import StandardTextField from './../../standard-text-field'
import ga from './../../../services/ga'

class CreateContactsForm extends Component {
  constructor (props) {
    super(props)
    this.popup = this.popup.bind(this)
    const {content} = props
    const contactFields = ['name', 'relationship', 'phone'].map(name => ({
      name,
      label: content[`${name}Label`],
      onFocus: () => {
        this.showHint()
        ga.triggerEvent(`contact-${name}-field-focused`)()
      },
      onBlur: (e) => {
        const event = e.target.value ? `${name}-field-completed` : `${name}-field-left-blank`
        ga.triggerEvent(event)()
      }
    }))
    this.state = {
      hintShown: false,
      contactFields
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

  showHint () {
    this.setState({hintShown: true})
  }

  popup (e) {
    let confirmationMessage = '\o/'
    e.returnValue = confirmationMessage
    return confirmationMessage
  }

  isDesktop () {
    return window.innerWidth > 640
  }

  render () {
    const {content} = this.props

    return (
      <form className='sign-up-page__form'>
        {renderIf(this.state.hintShown)(
          <div style={{position: 'relative', width: this.isDesktop() ? '50%' : '0'}}>
            <Hint text={content.hintText(this.props.contacts.length)} confirmLabelText={content.hintConfirmLabelText} />
          </div>
        )}

        <div className='sign-up-page__form-fields-container' ref='formFields'>
          {this.props.contacts.map((contact, i) => (
            <div className='sign-up-page__contact-fields-container' key={contact.tmpId}>
              {renderIf(i > 0)(
                <h3 className='sign-up-page__additional-contact-header'>{content.additionalContactLabel}</h3>
              )}

              {this.state.contactFields.map(({ name, label, onBlur, onFocus }, j) => (
                <StandardTextField
                  key={j}
                  onFocus={onFocus}
                  onChange={this.props.setContact(contact.tmpId, name)}
                  onBlur={onBlur}
                  name={name}
                  labelText={label}
                />
              ))}

              {renderIf(this.props.contacts.length > 1)(
                <div className='sign-up-page__remove-contact-btn' onClick={this.props.removeContact(contact.tmpId)}>&times;</div>
              )}
            </div>
          ))}

          <div className='sign-up-page__add-contact-btn' onClick={this.props.addContact}>+ {content.addContactBtnLabel}</div>

          <div className='sign-up-page__checkbox-container'>
            <Checkbox
              label={content.consentToContactLabel(this.props.contacts.length)}
              defaultChecked={true}
              onCheck={this.props.consentToContactIs()}
              style={{textAlign: 'left'}}
              iconStyle={{width: '32px', height: '32px', fill: '#40B097'}}
              labelStyle={{fontSize: window.innerWidth > 640 ? '18px' : '16px', color: '#4A4A4A', lineHeight: '24px', fontWeight: '300'}}
            />

          </div>

          <FlatButton
            className='gc-std-btn sign-up-page__form-continue-btn'
            style={{ backgroundColor: '#40B097' }}
            label={content.continueBtnLabel}
            onClick={this.props.saveContacts}
            disabled={this.props.requestInProgress}
          />
        </div>
      </form>
    )
  }
}

CreateContactsForm.propTypes = {
  content: PropTypes.object,
  contacts: PropTypes.array,
  setContact: PropTypes.func,
  removeContact: PropTypes.func,
  addContact: PropTypes.func,
  consentToContactIs: PropTypes.func,
  saveContacts: PropTypes.func,
  requestInProgress: PropTypes.bool
}

export default CreateContactsForm
