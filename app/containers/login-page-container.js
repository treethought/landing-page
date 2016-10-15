import React, { Component, PropTypes } from 'react'
import LoginPage from './../components/login-page'
import fetcher from './../services/fetcher'

class LoginPageContainer extends Component {

  constructor (props) {
    super(props)
    const { location } = props
    this.state = {
      redirectError: location.state ? location.state.errorMessage : null,
      emailOrPhone: '',
      requestInProgress: false
    }
  }

  setEmailOrPhone (e) {
    this.setState({emailOrPhone: e.target.value})
  }

  getAccessCode () {
    // fetcher({
    //   method: 'POST',
    //   url: `${config.apiBaseUrl}/users`,
    //   body: {},
    //   beforeRequest: this.setState.call(this, {requestInProgress: true})
    // }).then((res) => {
    //   // let {json, status} = res
    // }).catch((res) => {
    //   // let {json, status} = res
    // })
  }

  render () {
    return (
      <LoginPage
        requestInProgress={this.state.requestInProgress}
        redirectError={this.state.redirectError}
        setEmailOrPhone={this.setEmailOrPhone.bind(this)}
        emailOrPhone={this.state.emailOrPhone}
        getAccessCode={this.getAccessCode}
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
