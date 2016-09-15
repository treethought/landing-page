import React, {Component} from 'react'
import InnerPage from './../inner-page'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import renderIf from 'render-if'
import {Link} from 'react-router'
import Checkbox from 'material-ui/Checkbox'
import CreateUserForm from './create-user-form'

const contactFields = [
  {name: 'name', label: 'First Name, Last Name'},
  {name: 'relationship', label: 'Relationship'},
  {name: 'phone', label: 'Phone (xxx) xxx-xxxx'}
]

class SignUpPage extends Component {
  onIsContactableByUsCheck (contact) {
    return (e, isChecked) => {
      this.props.setContact(contact.tmpId, 'isContactableByUs')(null, null, isChecked)
    }
  }

  render () {
    return (
      <InnerPage>
        <div className="sign-up-page">
          <h1>Become a member today to get updates and be part of our Bronx pilot launch</h1>

          {renderIf(this.props.formStage === 0) (
            <div>
              <h2>tell us about yourself</h2>

              <CreateUserForm
                user={this.props.user}
                setUser={this.props.setUser}
                userFormErrors={this.props.userFormErrors}
                createUser={this.props.createUser}
                requestInProgress={this.props.requestInProgress}
              />
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
          )}

          {renderIf(this.props.formStage === 2) (
            <div>
              <h1>UR DONE</h1>
              <RaisedButton label="GO BACK" containerElement={<Link to="/" />}/>
            </div>
          )}
        </div>
      </InnerPage>
    )
  }
}

export default SignUpPage
