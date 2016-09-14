import React, {Component} from 'react'
import InnerPage from './../inner-page'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ReactPhoneInput from 'react-phone-input'
import renderIf from 'render-if'
import {Link} from 'react-router'
import includes from 'lodash.includes'
import values from 'lodash.values'
import isEmpty from 'lodash.isempty'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'

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

const heardAboutUsThroughOpts = [
  '',
  'Internet search',
  'Friends or family',
  'Social Media',
  'Email list',
  'Community event',
  'Good Call Representative',
  'Good Call business card or flyer',
  'Other'
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

                <SelectField
                  value={this.props.user.heardAboutUsThrough}
                  onChange={this.props.setUser('heardAboutUsThrough')}
                >
                  {heardAboutUsThroughOpts.map((opt, i) => (
                    <MenuItem key={i} value={opt} primaryText={opt} />
                  ))}
                </SelectField>

                <RaisedButton
                  label="Continue"
                  onClick={this.props.createUser}
                  disabled={
                    this.props.requestInProgress
                    || isEmpty(this.props.user)
                    || !this.props.user.name
                    || !this.props.user.phone
                    || !this.props.user.email
                    || !this.props.user.zip
                  }
                />
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
