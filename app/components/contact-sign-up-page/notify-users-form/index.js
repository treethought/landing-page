import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import { array, func } from 'prop-types'
import some from 'lodash.some'
import { TextField } from '../../index'

const NotifyUsersForm = props => {
  const { content, users, addUser, deleteUser, setUser, notifyUsers } = props

  const btnDisabled = () => some(users, ({ name, emailOrPhone }) => !name || !emailOrPhone)

  return (
    <div>
      <h2 className='sign-up-page__form-subheader'>{content.header}</h2>

      <form className='sign-up-page__form'>
        {users.map((u, i, arr) => (
          <div className='sign-up-page__form-fields-container' key={u.tmpId}>
            {arr.length > 1 &&
              <h3 className='sign-up-page__create-contacts-form-fields-header'>
                <span>Person #{i + 1}</span>
                <span
                  className='sign-up-page__create-contacts-form-delete-btn'
                  onClick={deleteUser(u.tmpId)}
                >&times;</span>
              </h3>
            }

            <TextField
              labelText={content.nameLabel}
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

NotifyUsersForm.propTypes = {
  users: array,
  setUser: func,
  addUser: func,
  deleteUser: func,
  notifyUsers: func
}

export default NotifyUsersForm
