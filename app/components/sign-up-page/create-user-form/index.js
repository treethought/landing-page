import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import isEmpty from 'lodash.isempty'

const userFields = [
  {name: 'name', label: 'First Name, Last Name'},
  {name: 'phone', label: 'Phone (xxx) xxx-xxxx'},
  {name: 'email', label: 'Email', type: 'email'},
  {name: 'zip', label: 'Zip Code'},
]

const heardAboutUsThroughOpts = [
  '',
  'Internet search',
  'Friends or family',
  'Social Media',
  'Email list',
  'Community event',
  'Good Call Representative',
  'Good Call business card or flyer', // TODO: truncate?
  'Other'
]

class CreateUserForm extends Component {
  render () {
    return (
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
    )
  }
}

export default CreateUserForm
