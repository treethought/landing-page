import React from 'react'
import { object, number, func, bool, string } from 'prop-types'
import renderIf from 'render-if'
import pick from 'lodash.pick'
import CreateUserForm from './create-user-form'
import CreateContactsForm from './create-contacts-form'

const UserSignUpPage = props => {
  const { content, formStage } = props

  return (
    <div className='sign-up-page'>
      <div className='sign-up-page__form-container'>
        <h1 className='sign-up-page__form-header'>{content.header}</h1>
        {renderIf(formStage === 0)(
          <div>
            <h2 className='sign-up-page__form-subheader'>{content.createUserForm.header}</h2>
            <CreateUserForm
              {...pick(props, [
                'user', 'setUser', 'createUser', 'locale', 'recaptchaSitekey',
                'requestInProgress'
              ])}
              content={content.createUserForm}
            />
          </div>
        )}

        {renderIf(formStage === 1)(
          <div>
            <h2 className='sign-up-page__form-subheader'>{content.createContactsForm.header}</h2>

            <CreateContactsForm
              content={content.createContactsForm}
              {...pick(props, [
                'toggleContactNotificationAllowed', 'contacts', 'setContact',
                'requestInProgress', 'addContact', 'deleteContact', 'createContacts'
              ])}
            />
          </div>
        )}
      </div>
    </div>
  )
}
UserSignUpPage.propTypes = {
  content: object,
  locale: string,
  formStage: number,
  user: object,
  setUser: func,
  createUser: func,
  toggleContactNotificationAllowed: func,
  requestInProgress: bool,
  contacts: object,
  setContact: func,
  addContact: func,
  deleteContact: func,
  createContacts: func
}

export default UserSignUpPage
