import React, {Component, PropTypes} from 'react'
import renderIf from 'render-if'
import CreateUserForm from './create-user-form'

class SignUpPage extends Component {
  render () {
    const {
      content, formStage, user, setUser, createUser, requestInProgress, locale,
      recaptchaSitekey
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
  requestInProgress: bool
}

export default SignUpPage
