import React from 'react'
import { number } from 'prop-types'
import CreateContactForm from './create-contact-form'
import pick from 'lodash.pick'

const ContactSignUpPage = props => {
  const { formStage, content } = props

  return (
    <div className='sign-up-page'>
      <div className='sign-up-page__form-container'>
        <h1 className='sign-up-page__form-header'>{content.header}</h1>
        {formStage === 0 && <CreateContactForm
          content={content.createContactForm}
          {...pick(props, ['setContact', 'contact', 'recaptchaSitekey'])}
        />}
      </div>
    </div>
  )
}

ContactSignUpPage.propTypes = {
  formStage: number
}

export default ContactSignUpPage
