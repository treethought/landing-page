import React, {Component} from 'react'
import InnerPage from './../inner-page'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ReactPhoneInput from 'react-phone-input'

const form1Fields = [
  {name: 'name', label: 'First Name, Last Name'},
  {name: 'phone', label: 'Phone (xxx) xxx-xxxx'},
  {name: 'email', label: 'Email', type: 'email'},
  {name: 'zip', label: 'Zip Code'},
]

class SignUpPage extends Component {
  render () {
    return (
      <InnerPage>
        <div className="sign-up-page">
          <h1>Become a member to test our pilot</h1>
          <h2>tell us about yourself</h2>

          <form className="sign-up-page__form-1">
            {form1Fields.map((field, i) => (
              <TextField
                key={i}
                className="sign-up-page__text-field"
                id={`sign-up-page__form-1-${field.name}`}
                floatingLabelText={field.label}
                name={field.name}
                type={field.type || ''}
              ></TextField>
            ))}

            <RaisedButton label="Continue" />
          </form>
        </div>
      </InnerPage>
    )
  }
}

export default SignUpPage
