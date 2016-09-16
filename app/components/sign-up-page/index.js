import React, {Component} from 'react'
import InnerPage from './../inner-page'
import renderIf from 'render-if'
import CreateUserForm from './create-user-form'
import CreateContactsForm from './create-contacts-form'

class SignUpPage extends Component {
  render () {
    return (
      <InnerPage location={this.props.location}>
        <div className="sign-up-page">
          {renderIf(this.props.formStage === 0) (
            <div className="sign-up-success-page__form-container">
              <h1 className="sign-up-success-page__form-header">Become a member today to get updates and be part of our Bronx pilot launch</h1>
              <h2 className="sign-up-success-page__form-subheader">tell us about yourself</h2>

              <CreateUserForm
                user={this.props.user}
                setUser={this.props.setUser}
                userFormErrors={this.props.userFormErrors}
                createUser={this.props.createUser}
                requestInProgress={this.props.requestInProgress}
              />
            </div>
          )}

          {renderIf(this.props.formStage === 1) (
            <div className="sign-up-success-page__form-container">
              <h1 className="sign-up-success-page__form-header">Become a member today to get updates and be part of our Bronx pilot launch</h1>
              <h2 className="sign-up-success-page__form-subheader">provide an emergency contact</h2>

              <CreateContactsForm
                setContact={this.props.setContact}
                contacts={this.props.contacts}
                removeContact={this.props.removeContact}
                addContact={this.props.addContact}
                saveContacts={this.props.saveContacts}
                requestInProgress={this.props.requestInProgress}
                consentToContactIs={this.props.consentToContactIs}
              />
            </div>
          )}
        </div>
      </InnerPage>
    )
  }
}

export default SignUpPage
