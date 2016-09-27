import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import renderIf from 'render-if'
import Dialog from 'material-ui/Dialog'
import Hint from './../hint'

const contactFields = [
  {name: 'name', label: 'First Name, Last Name (optional)'},
  {name: 'relationship', label: 'Relationship (optional)'},
  {name: 'phone', label: 'Phone (xxx) xxx-xxxx (optional)'}
]

class CreateContactsForm extends Component {
  constructor () {
    super()
    this.popup = this.popup.bind(this)
    this.state = {hintShown: false}
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
    return (
      <form className="sign-up-page__form">
        {renderIf(this.state.hintShown) (
          <div style={{position: 'relative', width: this.isDesktop() ? '50%' : '0'}}>
            <Hint
              text={`${this.props.contacts.length > 1 ? "These are the people" : "This is the person"} we would contact if you get arrested`}
            />
          </div>
        )}

        <div className="sign-up-page__form-fields-container" ref="formFields">
          {this.props.contacts.map((contact, i) => (
            <div className="sign-up-page__contact-fields-container" key={contact.tmpId}>
              {renderIf(i > 0)(
                <h3 className="sign-up-page__additional-contact-header">Additional contact</h3>
              )}

              {contactFields.map((field, j) => (
                <TextField
                  className="sign-up-page__form-text-field"
                  errorStyle={{marginBottom: '-15px'}}
                  floatingLabelFocusStyle={{fontSize: '14px', color: '#40B097', textTransform: 'uppercase'}}
                  floatingLabelText={field.label}
                  inputStyle={{fontSize: '18px'}}
                  name={field.name}
                  key={j}
                  onFocus={this.showHint.bind(this)}
                  style={{textAlign: 'left'}}
                  type={field.type || ''}
                  underlineFocusStyle={{borderColor: '#40B097'}}

                  id={`sign-up-page__form-1-contacts-${i}-${field.name}`}
                  onChange={this.props.setContact(contact.tmpId, field.name)}
                ></TextField>
              ))}


              {renderIf(this.props.contacts.length > 1) (
                <div className="sign-up-page__remove-contact-btn" onClick={this.props.removeContact(contact.tmpId)}>&times;</div>
              )}
            </div>
          ))}

          <div className="sign-up-page__add-contact-btn" onClick={this.props.addContact}>+ Add another contact</div>

          <div className="sign-up-page__checkbox-container">
            <Checkbox
              label={`Let us contact ${this.props.contacts.length > 1 ? "these people" : "this person"} to let them know you signed up. This will allow us to contact them if you were arrested.`}
              defaultChecked={true}
              onCheck={this.props.consentToContactIs()}
              style={{textAlign: "left"}}
              iconStyle={{width: "32px", height: "32px", fill: "#40B097"}}
              labelStyle={{fontSize: window.innerWidth > 640 ? "18px" : "16px", color: "#4A4A4A", lineHeight: "24px", fontWeight: "300"}}
            />

          </div>

          <FlatButton
            className="gc-std-btn sign-up-page__form-continue-btn"
            label="continue"
            onClick={this.props.saveContacts}
            disabled={this.props.requestInProgress}
          />
        </div>
      </form>
    )
  }
}

export default CreateContactsForm
