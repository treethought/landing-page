import React, {Component, PropTypes} from 'react'
import renderIf from 'render-if'
import CreateUserForm from './create-user-form'
import CreateContactsForm from './create-contacts-form'

class SignUpPage extends Component {
  render () {
    const {content} = this.props

    return (
      <div className='sign-up-page'>
        {renderIf(this.props.formStage === 0)(
          <div className='sign-up-page__form-container'>
            <h1 className='sign-up-page__form-header'>{content.header}</h1>
            <h2 className='sign-up-page__form-subheader'>{content.createUserForm.header}</h2>

            <CreateUserForm
              content={content.createUserForm}
              user={this.props.user}
              setUser={this.props.setUser}
              userFormErrors={this.props.userFormErrors}
              createUser={this.props.createUser}
              requestInProgress={this.props.requestInProgress}
              setUserDateOfBirth={this.props.setUserDateOfBirth}
            />
          </div>
        )}

        {renderIf(this.props.formStage === 1)(
          <div className='sign-up-page__form-container'>
            <h1 className='sign-up-page__form-header'>{content.header}</h1>
            <h2 className='sign-up-page__form-subheader'>{content.createContactsForm.header}</h2>

            <CreateContactsForm
              content={content.createContactsForm}
              setContact={this.props.setContact}
              contacts={this.props.contacts}
              saveContacts={this.props.saveContacts}
              addContact={this.props.addContact}
              removeContact={this.props.removeContact}
              requestInProgress={this.props.requestInProgress}
              consentToContactIs={this.props.consentToContactIs}
            />
          </div>
        )}
      </div>
    )
  }
}

SignUpPage.propTypes = {
  content: PropTypes.object,
  formStage: PropTypes.number,
  user: PropTypes.object,
  setUser: PropTypes.func,
  userFormErrors: PropTypes.object,
  createUser: PropTypes.func,
  requestInProgress: PropTypes.bool,
  setUserDateOfBirth: PropTypes.func,
  contactsFormErrors: PropTypes.array,
  setContact: PropTypes.func,
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
  addContact: PropTypes.func,
  saveContacts: PropTypes.func,
  consentToContactIs: PropTypes.func
}

export default SignUpPage
