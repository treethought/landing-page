import React, { Component } from 'react'
import { ContactSignUpPage } from '../components'

class ContactSignUpPageContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      requestInProgress: false,
      formStage: 0,
      recaptchaSitekey: '6Lc7NxQUAAAAAIZCaPCuSa-9_N2tjZcCik5647lj',
      contact: {
        errors: {}
      }
    }
  }

  setContact () {
    return () => {

    }
  }

  render () {
    const { route } = this.props
    const { content } = route

    return (
      <ContactSignUpPage
        {...this.state}
        content={content}
        setContact={this.setContact.bind(this)}
      />
    )
  }
}

export default ContactSignUpPageContainer
