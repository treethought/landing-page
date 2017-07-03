import React, { Component } from 'react'
import { array, func } from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import mapObject from 'object.map'
import some from 'lodash.some'
import values from 'lodash.values'
import pick from 'lodash.pick'
import { TextField } from '../../index'
import { isDesktop, scrollToTop } from '../../../services/utils'
import Hint from '../../user-sign-up-page/hint'
import { trackRegistrationEvent } from '../../../services/ga'

class NotifyUsersForm extends Component {
  constructor (props) {
    super(props)
    this.state = { hintShown: false }
  }

  showHint () {
    this.setState({ hintShown: true })
  }

  handleDropoff () {
    const formData = values(this.props.users).map(contact => (
      mapObject(pick(contact,
        ['name', 'emailOrPhone']
      ), attrs => !!attrs)
    ))
    trackRegistrationEvent('oc', 'leave-2', formData)
  }

  componentDidMount () {
    setTimeout(scrollToTop, 300)
    window.onbeforeunload = () =>
      this.handleDropoff()
  }

  componentWillUnmount () {
    this.handleDropoff()
    window.onbeforeunload = null
  }

  render () {
    const { content, users, addUser, deleteUser, setUser, notifyUsers } = this.props
    const { hintShown } = this.state
    const hintsContainerIsShown = isDesktop
      ? users.length === 1 && hintShown
      : hintShown
    const btnDisabled = () => some(users, ({ name, emailOrPhone }) => !name || !emailOrPhone)

    return (
      <div>
        <h2 className='sign-up-page__form-subheader'>{content.header}</h2>

        <form className='sign-up-page__form'>
          {hintsContainerIsShown && <div className='sign-up-page__create-user-form-hints-container'>
            <Hint
              text={content.hintText}
              confirmLabelText={content.hintConfirmLabelText}
              top='14px'
              show
            />
          </div>}

          {users.map((u, i, arr) => (
            <div className='sign-up-page__form-fields-container' key={u.tmpId}>
              {arr.length > 1 &&
                <h3 className='sign-up-page__create-contacts-form-fields-header'>
                  <span>{content.personText} #{i + 1}</span>
                  <span
                    className='sign-up-page__create-contacts-form-delete-btn'
                    onClick={deleteUser(u.tmpId)}
                  >&times;</span>
                </h3>
              }

              <TextField
                labelText={content.nameLabel}
                onFocus={this.showHint.bind(this)}
                errorText={u.errors.name}
                onChange={setUser(u.tmpId, 'name')}
              />

              <TextField
                labelText={content.emailOrPhoneLabel}
                errorText={u.errors.emailOrPhone}
                onChange={setUser(u.tmpId, 'emailOrPhone')}
              />

              {(i === arr.length - 1) && <div>
                <div className='sign-up-page__text-btn sign-up-page__add-contact-btn' onClick={addUser}>
                  + {content.addUserBtnLabel}
                </div>

                <FlatButton
                  className='gc-std-btn sign-up-page__form-continue-btn'
                  style={{ backgroundColor: '#40B097' }}
                  label={content.finishBtnLabel}
                  onClick={notifyUsers}
                  disabled={btnDisabled()}
                />
              </div>}
            </div>
          ))}
        </form>
      </div>
    )
  }
}

NotifyUsersForm.propTypes = {
  users: array,
  setUser: func,
  addUser: func,
  deleteUser: func,
  notifyUsers: func
}

export default NotifyUsersForm
