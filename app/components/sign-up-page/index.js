import React, {Component} from 'react'
import InnerPage from './../inner-page'
import renderIf from 'render-if'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router'
import CreateUserForm from './create-user-form'
import CreateContactsForm from './create-contacts-form'

class SignUpPage extends Component {
  render () {
    return (
      <InnerPage>
        <div className="sign-up-page">
          <h1>Become a member today to get updates and be part of our Bronx pilot launch</h1>

          {renderIf(this.props.formStage === 0) (
            <div>
              <h2>tell us about yourself</h2>

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
            <div>
              <h2>provide an emergency contact</h2>

              <CreateContactsForm
                setContact={this.props.setContact}
                contacts={this.props.contacts}
                removeContact={this.props.removeContact}
                addContact={this.props.addContact}
                saveContacts={this.props.saveContacts}
                requestInProgress={this.props.requestInProgress}
              />
            </div>
          )}

          {renderIf(this.props.formStage === 2) (
            <div>
              <h1>UR DONE</h1>
              <RaisedButton label="GO BACK" containerElement={<Link to="/" />}/>
            </div>
          )}
        </div>
      </InnerPage>
    )
  }
}

export default SignUpPage
