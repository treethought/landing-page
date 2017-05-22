import React, { Component, PropTypes } from 'react'
import renderIf from 'render-if'
import CreateUserForm from './create-user-form'
import CreateContactsForm from './create-contacts-form'

class SignUpPage extends Component {
  render () {
    const {
      content, formStage, user, setUser, createUser, requestInProgress, locale,
      recaptchaSitekey, toggleContactNotificationAllowed, contacts, setContact,
      toggleContactDateField, addContact, deleteContact, createContacts
    } = this.props

    return (
      <div className='sign-up-page'>
        <div className='sign-up-page__form-container'>
          <h1 className='sign-up-page__form-header'>{content.header}</h1>
          {renderIf(formStage === 0)(
            <div>
              <h2 className='sign-up-page__form-subheader'>{content.createUserForm.header}</h2>

              <CreateUserForm
                content={content.createUserForm}
                user={user}
                setUser={setUser}
                createUser={createUser}
                locale={locale}
                recaptchaSitekey={recaptchaSitekey}
                requestInProgress={requestInProgress}
              />
            </div>
          )}

          {renderIf(formStage === 1)(
            <div>
              <h2 className='sign-up-page__form-subheader'>{content.createContactsForm.header}</h2>

              <CreateContactsForm
                content={content.createContactsForm}
                toggleContactNotificationAllowed={toggleContactNotificationAllowed}
                contacts={contacts}
                setContact={setContact}
                toggleContactDateField={toggleContactDateField}
                requestInProgress={requestInProgress}
                addContact={addContact}
                deleteContact={deleteContact}
                createContacts={createContacts}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

const { object, number, func, bool, string } = PropTypes
SignUpPage.propTypes = {
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
  toggleContactDateField: func,
  addContact: func,
  deleteContact: func,
  createContacts: func
}

export default SignUpPage
