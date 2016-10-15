import React, { Component, PropTypes } from 'react'
import LoginPage from './../components/login-page'

class LoginPageContainer extends Component {

  constructor (props) {
    super(props)
    const { location } = props
    this.state = {
      redirectError: location.state ? location.state.errorMessage : null
    }
  }

  render () {
    return (
      <LoginPage
        redirectError={this.state.redirectError}
      />
    )
  }
}

const { object } = PropTypes
LoginPageContainer.propTypes = {
  route: object,
  location: object
}

export default LoginPageContainer
