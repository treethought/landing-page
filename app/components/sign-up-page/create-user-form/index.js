import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import isEmpty from 'lodash.isempty'
import {findDOMNode} from 'react-dom'

const userFields = [
  {name: 'name', label: 'First Name, Last Name'},
  {name: 'phone', label: 'Cell Phone (xxx) xxx-xxxx'},
  {name: 'email', label: 'Email', type: 'email'},
  {name: 'zip', label: 'Zip Code'},
]

const heardAboutUsThroughOpts = [
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
              Your information will not be shared with anyone. It is used only to verify you in case of an arrest.
            </p>
          </div>
          <div className="sign-up-page__create-user-form-hint-bubble-arrow"></div>
        </div>

        <div className="sign-up-page__create-user-form-fields-container" ref="formFields">
          {userFields.map((field, i) => (
            <TextField
              key={i}
              className="sign-up-page__create-user-form-text-field"
              id={`sign-up-page__form-1-user-${field.name}`}
              floatingLabelText={field.label}
              floatingLabelFocusStyle={{fontSize: '14px', color: '#40B097', textTransform: 'uppercase'}}
              style={{textAlign: 'left'}}
              inputStyle={{fontSize: '18px'}}
              errorStyle={{marginBottom: '-15px'}}
              underlineFocusStyle={{borderColor: '#40B097'}}
              name={field.name}
              type={field.type || ''}
              onChange={this.props.setUser(field.name)}
              onFocus={this.showHint.bind(this)}
              errorText={this.props.userFormErrors[field.name]}
            />
          ))}

          <SelectField
            className="sign-up-page__create-user-form-select-field"
            fullWidth={true}
            autoWidth={true}
            hintText="How did you learn about Good Call?"
            hintStyle={{fontSize: '16px', color: '#4A4A4A', fontWeight: '300', textAlign: 'left'}}
            value={this.props.user.heardAboutUsThrough}
            onChange={this.props.setUser('heardAboutUsThrough')}
            iconStyle={{fill: '#40B097', transform: 'rotateZ(180deg)', right: '5px', top: '12px'}}
            style={{boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.24)', paddingLeft: '11px', paddingTop: '3px', marginTop: '6px', textAlign: 'left'}}
            underlineStyle={{borderColor: 'transparent'}}
          >
            {heardAboutUsThroughOpts.map((opt, i) => (
              <MenuItem key={i} value={opt} primaryText={opt} style={{background: '#FFFFFF'}} />
            ))}
          </SelectField>

          <FlatButton
            className="gc-std-btn sign-up-page__create-user-form-continue-btn"
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
        </div>
      </form>
    )
  }
}

export default CreateUserForm
