import React, {Component, PropTypes} from 'react'
import renderIf from 'render-if'
import CreateUserForm from './create-user-form'
import CreateContactsForm from './create-contacts-form'
import isEmpty from 'lodash.isempty'

class SignUpPage extends Component {
  render () {
    const {
      content, formStage, user, setUser, userFormErrors, createUser,
      requestInProgress, setUserDateOfBirth, setContact, contacts, removeContact,
      addContact, saveContacts, consentToContactIs, contactsFormErrors
    } = this.props

    return (
      <div className='sign-up-page'>
        {renderIf(formStage === 0)(
          <div className='sign-up-page__form-container'>
            <h1 className='sign-up-page__form-header'>{content.header}</h1>
            <h2 className='sign-up-page__form-subheader'>{content.createUserForm.header}</h2>

            <CreateUserForm
              content={content.createUserForm}
              user={user}
              setUser={setUser}
              userFormErrors={userFormErrors}
              createUser={createUser}
              requestInProgress={requestInProgress}
              setUserDateOfBirth={setUserDateOfBirth}
            />
          </div>
        )}

        {renderIf(formStage === 1)(
          <div className='sign-up-page__form-container'>
            <h1 className='sign-up-page__form-header'>{content.header}</h1>
            <h2 className='sign-up-page__form-subheader'>{content.createContactsForm.header}</h2>

            {renderIf(!isEmpty(contactsFormErrors[0]))(
              <div className='sign-up-page__token-errors'>
                {content.createContactsForm.errorTextLine1}<br />
                {content.createContactsForm.errorTextLine2}
              </div>
            )}

            <CreateContactsForm
              content={content.createContactsForm}
              user={user}
              setContact={setContact}
              contacts={contacts}
              removeContact={removeContact}
              addContact={addContact}
              saveContacts={saveContacts}
              requestInProgress={requestInProgress}
              consentToContactIs={consentToContactIs}
            />
          </div>
        )}
      </div>
    )
  }
}

const { object, number, func, bool, array } = PropTypes
SignUpPage.propTypes = {
  content: object,
  formStage: number,
  user: object,
  setUser: func,
  userFormErrors: object,
  createUser: func,
  requestInProgress: bool,
  setUserDateOfBirth: func,
  contactsFormErrors: array,
  setContact: func,
  contacts: array,
  removeContact: func,
  addContact: func,
  saveContacts: func,
  consentToContactIs: func
}

export default SignUpPage
