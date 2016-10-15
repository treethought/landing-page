import React, {Component} from 'react'
import LoginPage from './../components/login-page'

class LoginPageContainer extends Component {
  render () {
    console.log(this.props.location)

    return (
      <LoginPage
        location={this.props.location}
      />
    )
  }
}

export default LoginPageContainer
