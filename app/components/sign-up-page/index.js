import React, {Component} from 'react'
import InnerPage from './../inner-page'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ReactPhoneInput from 'react-phone-input'
import renderIf from 'render-if'

const userFields = [
  {name: 'name', label: 'First Name, Last Name'},
  {name: 'phone', label: 'Phone (xxx) xxx-xxxx'},
  {name: 'email', label: 'Email', type: 'email'},
  {name: 'zip', label: 'Zip Code'},
]

const contactFields = [
  {name: 'name', label: 'First Name, Last Name'},
  {name: 'relationship', label: 'Relationship'},
  {name: 'phone', label: 'Phone (xxx) xxx-xxxx'}
]

class SignUpPage extends Component {
  render () {
    return (
      <InnerPage>
        <div className="sign-up-page">
          {renderIf(this.props.formStage === 0) (
            <div>
              <h1>Become a member to test our pilot</h1>
              <h2>tell us about yourself</h2>

              <form className="sign-up-page__form-1">
                {userFields.map((field, i) => (
                  <TextField
                    key={i}
                    className="sign-up-page__text-field"
                    id={`sign-up-page__form-1-user-${field.name}`}
                    floatingLabelText={field.label}
                    name={field.name}
                    type={field.type || ''}
                    onChange={this.props.setUser(field.name)}
                    errorText={this.props.userFormErrors[field.name]}
                    ></TextField>
                ))}

                <RaisedButton label="Continue" onClick={this.props.createUser} />
              </form>
            </div>
          )}

          {renderIf(this.props.formStage === 1) (
            <div>
              <h1>Form part 2</h1>
              <h2>meow meow</h2>

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

                    <RaisedButton label="go away" onClick={this.props.removeContact(contact.tmpId)}/>
                  </div>
                ))}
              </form>

              <RaisedButton label="Add another contact" onClick={this.props.addContact}/>
            </div>
          )}
        </div>
      </InnerPage>
    )
  }
}

export default SignUpPage
