import React, {Component} from 'react'
import InnerPage from './../inner-page'
import renderIf from 'render-if'
import CreateUserForm from './create-user-form'
import CreateContactsForm from './create-contacts-form'
import isEmpty from 'lodash.isempty'

class SignUpPage extends Component {
  render () {
    return (
      <InnerPage location={this.props.location}>
        <div className="sign-up-page">
          {renderIf(this.props.formStage === 0) (
            <div className="sign-up-page__form-container">
              <h1 className="sign-up-page__form-header">Sign up today to get updates and be part of our Bronx pilot launch</h1>
              <h2 className="sign-up-page__form-subheader">tell us about yourself</h2>

              <CreateUserForm
                user={this.props.user}
                setUser={this.props.setUser}
                userFormErrors={this.props.userFormErrors}
                createUser={this.props.createUser}
                requestInProgress={this.props.requestInProgress}
                setUserDateOfBirth={this.props.setUserDateOfBirth}
              />
            </div>
          )}

          {renderIf(this.props.formStage === 1) (
            <div className="sign-up-page__form-container">
              <h1 className="sign-up-page__form-header">Sign up today to get updates and be part of our Bronx pilot launch</h1>
              <h2 className="sign-up-page__form-subheader">provide an emergency contact</h2>

              <CreateContactsForm
                setContact={this.props.setContact}
                contacts={this.props.contacts}
                createContacts={this.props.createContacts}
                requestInProgress={this.props.requestInProgress}
              />
            </div>
          )}
        </div>
      </InnerPage>
    )
  }
}

export default SignUpPage

// addContact={this.props.addContact}
// removeContact={this.props.removeContact}
// consentToContactIs={this.props.consentToContactIs}
