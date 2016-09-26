import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import isEmpty from 'lodash.isempty'
import range from 'lodash.range'
import Hint from './../hint'
import renderIf from 'render-if'

const userFields = [
  {name: 'name', label: 'Full Name'},
  {name: 'phone', label: 'Cell Phone (xxx) xxx-xxxx'},
  {name: 'email', label: 'Email', type: 'email'},
  {name: 'zip', label: 'Zip Code'},
  {name: 'securityQuestion', label: 'Security Question'},
  {name: 'securityAnswer', label: 'Security Answer'}
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

const dateOptions = {
  months: range(1,13),
  days: range(1, 32),
  years: range(1916, 1999)
}

class CreateUserForm extends Component {
  constructor () {
    super()
    this.state = {infoHintShown: false}
  }

  showInfoHint (e) {
    this.setState({infoHintShown: true})
  }

  isDesktop () {
    return window.innerWidth > 640
  }

  render () {
    let CustomSelectField = ({fieldOpts, onChange, hintText, value, className, width}) => (
      <SelectField
        className={className || ''}
        autoWidth={true}
        iconStyle={{fill: '#40B097', right: '5px', top: '12px'}}
        hintText={hintText}
        hintStyle={{fontSize: this.isDesktop() ? '16px' : '14px', color: '#4A4A4A', fontWeight: '300', textAlign: 'left'}}
        menuStyle={{color: '#000000'}}
        onChange={onChange}
        style={{width: width || '100%', boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.24)', paddingLeft: '11px', paddingTop: '3px', marginTop: '6px', textAlign: 'left'}}
        underlineStyle={{borderColor: 'transparent'}}
        value={value}
      >
        {fieldOpts.map((opt, i) => (
          <MenuItem key={i} value={opt} primaryText={opt} style={{background: '#FFFFFF'}} />
        ))}
      </SelectField>
    )

    return (
      <form className="sign-up-page__form">

        {renderIf(this.state.infoHintShown) (
          <Hint
            text="Your information will only be used by Good Call to verify you in case of an arrest and by your lawyer for your case."
          />
        )}

        <div
          className="sign-up-page__form-fields-container"
          style={{
            textAlign: (this.props.infoHintShown || this.props.securityHintShown) ? 'right' : 'left'
          }}
        >
          {userFields.map((field, i) => (
            <TextField
              className="sign-up-page__form-text-field"
              errorStyle={{marginBottom: '-15px'}}
              floatingLabelFocusStyle={{fontSize: '14px', color: '#40B097', textTransform: 'uppercase'}}
              floatingLabelText={field.label}
              inputStyle={{fontSize: '18px'}}
              key={i}
              name={field.name}
              onFocus={this.showInfoHint.bind(this)}
              style={{textAlign: 'left'}}
              type={field.type || ''}
              underlineFocusStyle={{borderColor: '#40B097'}}
              errorText={this.props.userFormErrors[field.name]}
              onChange={this.props.setUser(field.name)}
              id={`sign-up-page__form-1-user-${field.name}`}
            />
          ))}

          <div className="sign-up-page__date-select-container">
            <label className="sign-up-page__date-select-label">Date of Birth</label>

            <div className="sign-up-page__date-select-fields-container">
              <CustomSelectField
                fieldOpts={dateOptions.months}
                className="sign-up-page__form-select-date-field"
                hintText="Month"
                width="75px"
                value={this.props.user.dateOfBirthObj.month}
                onChange={this.props.setUserDateOfBirth('month')}
                />

              <CustomSelectField
                fieldOpts={dateOptions.days}
                className="sign-up-page__form-select-date-field"
                hintText="Day"
                width="60px"
                value={this.props.user.dateOfBirthObj.day}
                onChange={this.props.setUserDateOfBirth('day')}
                />

              <CustomSelectField
                fieldOpts={dateOptions.years}
                className="sign-up-page__form-select-date-field"
                hintText="Year"
                width="65px"
                value={this.props.user.dateOfBirthObj.year}
                onChange={this.props.setUserDateOfBirth('year')}
                />
            </div>
          </div>

          <CustomSelectField
            fieldOpts={heardAboutUsThroughOpts}
            onChange={this.props.setUser('heardAboutUsThrough')}
            hintText="How did you hear about Good Call?"
            value={this.props.user.heardAboutUsThrough}
          />

          <FlatButton
            className="gc-std-btn sign-up-page__form-continue-btn"
            label="continue"
            onClick={this.props.createUser}
            disabled={
              this.props.requestInProgress
              || isEmpty(this.props.user)
              || !this.props.user.name
              || !(this.props.user.phone || this.props.user.email)
              || !(this.props.user.dateOfBirthObj.month && this.props.user.dateOfBirthObj.day && this.props.user.dateOfBirthObj.year)
              || !this.props.user.zip
              || !(this.props.user.securityQuestion && this.props.user.securityAnswer)
            }
          />
        </div>
      </form>
    )
  }
}

export default CreateUserForm
