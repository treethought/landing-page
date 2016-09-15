import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

const contactFields = [
  {name: 'name', label: 'First Name, Last Name'},
  {name: 'relationship', label: 'Relationship'},
  {name: 'phone', label: 'Phone (xxx) xxx-xxxx'}
]

class CreateContactsForm extends Component {
  onIsContactableByUsCheck (contact) {
    return (e, isChecked) => {
      this.props.setContact(contact.tmpId, 'isContactableByUs')(null, null, isChecked)
    }
  }

  render () {
    return (
      <div>
        <form className="sign-up-page__form-2">
          {this.props.contacts.map((contact, i) => (
            <div className="sign-up-page__contact-fields-container" key={contact.tmpId}>
              {contactFields.map((field, j) => (
                <TextField
                  key={j}
                  className="sign-up-page__text-field"
                  id={`sign-up-page__form-1-contacts-${i}-${field.name}`}
                  floatingLabelText={field.label}
                  name={field.name}
                  type={field.type || ''}
                  onChange={this.props.setContact(contact.tmpId, field.name)}
                ></TextField>
              ))}

              <Checkbox
                label="Can we let this person know that you signed up for Good Call?"
                defaultChecked={false}
                onCheck={this.onIsContactableByUsCheck(contact).bind(this)}
              />

              <RaisedButton label="go away" onClick={this.props.removeContact(contact.tmpId)}/>
            </div>
          ))}
        </form>

        <RaisedButton label="Add another contact" onClick={this.props.addContact}/>

        <RaisedButton
          label="Save contacts"
          onClick={this.props.saveContacts}
          disabled={this.props.requestInProgress}
        />
      </div>
    )
  }
}

export default CreateContactsForm
