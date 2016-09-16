import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'

const contactFields = [
  {name: 'name', label: 'First Name, Last Name'},
  {name: 'relationship', label: 'Relationship'},
  {name: 'phone', label: 'Phone (xxx) xxx-xxxx'}
]

class CreateContactsForm extends Component {
  showHint () {
    let {hint, formFields} = this.refs
    hint.style.display = 'flex'
    formFields.style.textAlign = 'right'
  }

  render () {
    return (
      <form className="sign-up-page__create-user-form">
        <div className="sign-up-page__create-user-form-hint-bubble-container" ref="hint">
          <div className="sign-up-page__create-user-form-hint-bubble">
            <p className="sign-up-page__create-user-form-hint-text">
              {this.props.contacts.length > 1 ? "These are the people" : "This is the person"} we would contact if you get arrested to let them know you’re okay
            </p>
          </div>
          <div className="sign-up-page__create-user-form-hint-bubble-arrow"></div>
        </div>

        <div className="sign-up-page__create-user-form-fields-container" ref="formFields">
          {this.props.contacts.map((contact, i) => (
            <div className="sign-up-page__contact-fields-container" key={contact.tmpId}>
              {contactFields.map((field, j) => (
                <TextField
                  key={j}
                  className="sign-up-page__create-user-form-text-field"
                  id={`sign-up-page__form-1-contacts-${i}-${field.name}`}
                  floatingLabelText={field.label}
                  floatingLabelFocusStyle={{fontSize: '14px', color: '#40B097', textTransform: 'uppercase'}}
                  style={{textAlign: 'left'}}
                  inputStyle={{fontSize: '18px'}}
                  errorStyle={{marginBottom: '-15px'}}
                  underlineFocusStyle={{borderColor: '#40B097'}}
                  name={field.name}
                  type={field.type || ''}
                  onChange={this.props.setContact(contact.tmpId, field.name)}
                  onFocus={this.showHint.bind(this)}
                ></TextField>
              ))}

              <div className="sign-up-page__remove-contact-btn" onClick={this.props.removeContact(contact.tmpId)}>&times;</div>
            </div>
          ))}

          <div className="sign-up-page__add-contact-btn" onClick={this.props.addContact}>+ Add another contact</div>

          <div className="sign-up-page__checkbox-container">
            <Checkbox
              label={`Let us contact ${this.props.contacts.length > 1 ? "these people" : "this person"} to let them know you signed up. This will allow us to contact them if you were arrested.`}
              defaultChecked={false}
              onCheck={this.props.consentToContactIs()}
              style={{textAlign: "left"}}
              iconStyle={{width: "32px", height: "32px", fill: "#40B097"}}
              labelStyle={{fontSize: "18px", color: "#4A4A4A", lineHeight: "24px", fontWeight: "300"}}
            />

          </div>

          <FlatButton
            className="gc-std-btn sign-up-page__create-user-form-continue-btn"
            label="Continue"
            onClick={this.props.saveContacts}
            disabled={this.props.requestInProgress}
          />
        </div>
      </form>
    )
  }
}

export default CreateContactsForm
