import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import isEmpty from 'lodash.isempty'
import {findDOMNode} from 'react-dom'
import MediaQuery from 'react-responsive'
import Dialog from 'material-ui/Dialog'
import bowser from 'bowser'

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
  constructor () {
    super()
    this.state = {hintShown: false, hintClosed: false}
  }

  showHint () {
    if (window.innerWidth > 640) {
      let {hint, formFields} = this.refs
      hint.style.display = bowser.safari ? '-webkit-flex' : 'flex'
      formFields.style.textAlign = 'right'
    } else {
      if (!this.state.hintShown) {
        this.setState({hintShown: true})
      }
    }
  }

  closeHintDialog () {
    this.setState({hintClosed: true})
  }

  render () {
    return (
      <form className="sign-up-page__form">
        <div className="sign-up-page__form-hint-bubble-container" ref="hint">
          <div className="sign-up-page__form-hint-bubble">
            <p className="sign-up-page__form-hint-text">
              Your information will only be used by Good Call to verify you in case of an arrest and by your lawyer for your case.
            </p>
          </div>
          <div className="sign-up-page__form-hint-bubble-arrow"></div>
        </div>

        <Dialog
          actions={
            <FlatButton
              label="GOT IT"
              labelStyle={{color: "#FDFFF9", fontSize: "14px", letterSpacing: "0.5px"}}
              onTouchTap={this.closeHintDialog.bind(this)}
            />
          }
          contentStyle={{fontSize: "16px", color: "#FDFFF9", lineHeight: "24px", fontWeight: "300"}}
          bodyStyle={{background: "#40B097", color: "#FDFFF9"}}
          actionsContainerStyle={{background: "#40B097"}}
          modal={false}
          open={this.state.hintShown && !this.state.hintClosed}
          onRequestClose={this.closeHintDialog.bind(this)}
        >
          Your information will only be used by Good Call to verify you in case of an arrest and by your lawyer for your case.
        </Dialog>

        <div className="sign-up-page__form-fields-container" ref="formFields">
          {userFields.map((field, i) => (
            <TextField
              className="sign-up-page__form-text-field"
              errorStyle={{marginBottom: '-15px'}}
              floatingLabelFocusStyle={{fontSize: '14px', color: '#40B097', textTransform: 'uppercase'}}
              floatingLabelText={field.label}
              inputStyle={{fontSize: '18px'}}
              key={i}
              name={field.name}
              onFocus={this.showHint.bind(this)}
              style={{textAlign: 'left'}}
              type={field.type || ''}
              underlineFocusStyle={{borderColor: '#40B097'}}

              errorText={this.props.userFormErrors[field.name]}
              onChange={this.props.setUser(field.name)}
              id={`sign-up-page__form-1-user-${field.name}`}
            />
          ))}

          <MediaQuery query="(min-width: 640px)">
            <SelectField
              autoWidth={true}
              className="sign-up-page__form-select-field"
              fullWidth={true}
              iconStyle={{fill: '#40B097', right: '5px', top: '12px'}}
              hintText="How did you hear about Good Call?"
              hintStyle={{fontSize: '16px', color: '#4A4A4A', fontWeight: '300', textAlign: 'left'}}
              menuStyle={{color: '#000000'}}
              onChange={this.props.setUser('heardAboutUsThrough')}
              style={{boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.24)', paddingLeft: '11px', paddingTop: '3px', marginTop: '6px', textAlign: 'left'}}
              underlineStyle={{borderColor: 'transparent'}}
              value={this.props.user.heardAboutUsThrough}
            >
              {heardAboutUsThroughOpts.map((opt, i) => (
                <MenuItem key={i} value={opt} primaryText={opt} style={{background: '#FFFFFF'}} />
              ))}
            </SelectField>
          </MediaQuery>

          <MediaQuery query="(max-width: 639px)">
            <SelectField
              autoWidth={true}
              className="sign-up-page__form-select-field"
              fullWidth={true}
              iconStyle={{fill: '#40B097', right: '5px', top: '12px'}}
              hintText="How did you hear about Good Call?"
              hintStyle={{fontSize: '14px', color: '#4A4A4A', fontWeight: '300', textAlign: 'left'}}
              menuStyle={{color: '#000000'}}
              onChange={this.props.setUser('heardAboutUsThrough')}
              style={{boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.24)', paddingLeft: '11px', paddingTop: '3px', marginTop: '6px', textAlign: 'left'}}
              underlineStyle={{borderColor: 'transparent'}}
              value={this.props.user.heardAboutUsThrough}
            >
              {heardAboutUsThroughOpts.map((opt, i) => (
                <MenuItem key={i} value={opt} primaryText={opt} style={{background: '#FFFFFF'}} />
              ))}
            </SelectField>
          </MediaQuery>

          <FlatButton
            className="gc-std-btn sign-up-page__form-continue-btn"
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
