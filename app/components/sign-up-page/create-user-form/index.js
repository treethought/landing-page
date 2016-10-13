import React, {Component, PropTypes} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import isEmpty from 'lodash.isempty'
import range from 'lodash.range'
import Hint from './../hint'
import renderIf from 'render-if'
import StandardTextField from './../../standard-text-field'

const dateOptions = {
  months: range(1, 13).map(n => ({label: n, value: n})),
  days: range(1, 32).map(n => ({label: n, value: n})),
  years: range(1916, 1999).map(n => ({label: n, value: n}))
}

class CreateUserForm extends Component {
  constructor (props) {
    super(props)
    let {content} = props
    this.state = {
      infoHintShown: false,
      securityHintShown: false,
      userFields: [
        {name: 'name', label: content.nameLabel, onFocus: this.showInfoHint.bind(this)},
        {name: 'phone', label: content.phoneLabel, onFocus: this.showInfoHint.bind(this)},
        {name: 'email', label: content.emailLabel, type: 'email', onFocus: this.showInfoHint.bind(this)},
        {name: 'zip', label: content.zipLabel, onFocus: this.showInfoHint.bind(this)},
        {name: 'securityQuestion', label: content.securityQuestionLabel, onFocus: this.showSecurityHint.bind(this)},
        {name: 'securityAnswer', label: content.securityAnswerLabel, onFocus: this.showSecurityHint.bind(this)}
      ],
      heardAboutUsThroughOpts: [
        {label: content.internetSearchLabel, value: 'Internet search'},
        {label: content.friendsOrFamilyLabel, value: 'Friends or family'},
        {label: content.socialMediaLabel, value: 'Social Media'},
        {label: content.emailListLabel, value: 'Email list'},
        {label: content.communityEventLabel, value: 'Community event'},
        {label: content.goodCallRepresentativeLabel, value: 'Good Call Representative'},
        {label: content.goodCallBusinessCardOrFlyerLabel, value: 'Good Call business card or flyer'},
        {label: content.otherLabel, value: 'Other'}
      ]
    }
  }

  showInfoHint (e) {
    this.setState({infoHintShown: true})
  }

  showSecurityHint (e) {
    this.setState({securityHintShown: true})
  }

  continueBtnIsDisabled () {
    const { user, requestInProgress } = this.props
    const { attributes } = user.data.attributes
    const { name, phone, email, dateOfBirthObj, zip, securityQuestion, securityAnswer } = attributes || {}
    const { month, day, year } = dateOfBirthObj || {}
    return requestInProgress || isEmpty(attributes) || !name || !(phone || email) || !(month && day && year) || !zip || !(securityQuestion && securityAnswer)
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
        labelStyle={{ position: 'relative', bottom: '5px' }}
        onChange={onChange}
        style={{width: width || '100%', boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.24)', paddingLeft: '11px', paddingTop: '3px', marginTop: '6px', textAlign: 'left'}}
        underlineStyle={{borderColor: 'transparent'}}
        maxHeight={200}
        value={value}
      >
        {fieldOpts.map((opt, i) => (
          <MenuItem key={i} value={opt.value} primaryText={opt.label} style={{background: '#FFFFFF'}} />
        ))}
      </SelectField>
    )

    const {content} = this.props

    return (
      <form className='sign-up-page__form'>
        {renderIf(this.state.infoHintShown || this.state.securityHintShown)(
          <div style={{position: 'relative', width: this.isDesktop() ? '50%' : '0'}}>
            {renderIf(this.state.infoHintShown)(
              <Hint text={content.infoHintText} />
            )}

            {renderIf(this.state.securityHintShown)(
              <Hint text={content.securityHintText} className='sign-up-page__hint-security' />
            )}
          </div>
        )}

        <div
          className='sign-up-page__form-fields-container'
          style={{
            textAlign: (this.props.infoHintShown || this.props.securityHintShown) ? 'right' : 'left'
          }}
        >
          {this.state.userFields.map((field, i) => (
            <StandardTextField
              key={i}
              errorText={this.props.user.errors.attributes[field.name]}
              onFocus={field.onFocus}
              onChange={this.props.setUser(field.name)}
              labelText={field.label}
            />
          ))}

          <div className='sign-up-page__date-select-container'>
            <label className='sign-up-page__date-select-label'>{content.dateOfBirthLabel}</label>

            <div className='sign-up-page__date-select-fields-container'>
              <CustomSelectField
                fieldOpts={dateOptions.months}
                className='sign-up-page__form-select-date-field'
                hintText={content.monthLabel}
                width='75px'
                value={this.props.user.data.attributes.dateOfBirthObj.month}
                onChange={this.props.setUserDateOfBirth('month')}
              />

              <CustomSelectField
                fieldOpts={dateOptions.days}
                className='sign-up-page__form-select-date-field'
                hintText={content.dayLabel}
                width='60px'
                value={this.props.user.data.attributes.dateOfBirthObj.day}
                onChange={this.props.setUserDateOfBirth('day')}
              />

              <CustomSelectField
                fieldOpts={dateOptions.years}
                className='sign-up-page__form-select-date-field'
                hintText={content.yearLabel}
                width='65px'
                value={this.props.user.data.attributes.dateOfBirthObj.year}
                onChange={this.props.setUserDateOfBirth('year')}
              />
            </div>
          </div>

          <CustomSelectField
            fieldOpts={this.state.heardAboutUsThroughOpts}
            onChange={this.props.setUser('heardAboutUsThrough')}
            hintText={content.heardAboutUsThroughLabel}
            value={this.props.user.data.attributes.heardAboutUsThrough}
          />

          <FlatButton
            className='gc-std-btn sign-up-page__form-continue-btn sign-up-page__create-user-form-continue-btn'
            label={content.continueBtnLabel}
            onClick={this.props.createUser}
            disabled={this.continueBtnIsDisabled()}
          />
          <p className='sign-up-page__form-continue-btn-terms-text' dangerouslySetInnerHTML={{__html: content.continueBtnTermsText}}></p>
        </div>
      </form>
    )
  }
}

CreateUserForm.propTypes = {
  content: PropTypes.object,
  infoHintShown: PropTypes.bool,
  securityHintShown: PropTypes.bool,
  setUser: PropTypes.func,
  userFormErrors: PropTypes.object,
  user: PropTypes.object,
  setUserDateOfBirth: PropTypes.func,
  createUser: PropTypes.func,
  requestInProgress: PropTypes.bool
}

export default CreateUserForm
