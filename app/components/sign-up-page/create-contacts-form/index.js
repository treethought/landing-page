import React, {Component} from 'react'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import renderIf from 'render-if'
import Dialog from 'material-ui/Dialog'
import Hint from './../hint'
import StandardTextField from './../../standard-text-field'

const contactFields = [
  {name: 'name', label: 'First Name, Last Name (optional)'},
  {name: 'relationship', label: 'Relationship (optional)'},
  {name: 'phone', label: 'Phone (xxx) xxx-xxxx (optional)'}
]

class CreateContactsForm extends Component {
  constructor () {
    super()
    // this.popup = this.popup.bind(this)
    this.state = {hintShown: false}
  }

  // componentDidMount () {
  //   document.body.scrollTop = document.documentElement.scrollTop = 0
  //   window.addEventListener('beforeunload', this.popup)
  //   window.addEventListener('unload', () => { window.removeEventListener('beforeunload', this.popup) })
  // }
  //
  // componentWillUnmount () {
  //   window.removeEventListener('beforeunload', this.popup)
  // }
  //
  // popup (e) {
  //   let confirmationMessage = '\o/'
  //   e.returnValue = confirmationMessage
  //   return confirmationMessage
  // }

  showHint () {
    this.setState({hintShown: true})
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
              text={`${this.props.contacts.length > 1 ? "These are the people" : "This is the person"} we would contact if you are arrested`}
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
                <StandardTextField
                  key={j}
                  onFocus={this.showHint.bind(this)}
                  onChange={this.props.setContact(contact.tmpId, field.name)}
                  name={field.name}
                  labelText={field.label}
                  errorText={contact.errors.attributes[field.name]}
                />
              ))}

              {/*renderIf(this.props.contacts.length > 1) (
                <div className="sign-up-page__remove-contact-btn" onClick={this.props.removeContact(contact.tmpId)}>&times;</div>
              )*/}
            </div>
          ))}

          {<div className="sign-up-page__add-contact-btn" onClick={this.props.addContact}>+ Add another contact</div>}

          {/*<div className="sign-up-page__checkbox-container">
            <Checkbox
              label={`Let us contact ${this.props.contacts.length > 1 ? "these people" : "this person"} to let them know you signed up. This will allow us to contact them if you are arrested.`}
              defaultChecked={true}
              onCheck={this.props.consentToContactIs()}
              style={{textAlign: "left"}}
              iconStyle={{width: "32px", height: "32px", fill: "#40B097"}}
              labelStyle={{fontSize: window.innerWidth > 640 ? "18px" : "16px", color: "#4A4A4A", lineHeight: "24px", fontWeight: "300"}}
            />

          </div>*/}

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
