import React, {Component} from 'react'
import SignUpPage from './../components/sign-up-page'
import config from './../config'
import fetcher from './../services/fetcher'
import objectMap from 'object.map'

class SignUpPageContainer extends Component {
  constructor () {
    super()
    this.state = { formStage: 0, user: {}, formToken: {}, formErrors: {} }
  }

  createUser () {
    return fetcher({
      url: `${config.apiBaseUrl}/users`,
      method: 'POST',
      body: {user: this.state.user}
    }).then((res) => {
      let {status, json} = res
      if (status === 200) {
        this.setState({formErrors: {}, formToken: json.user.formToken, formStage: 1})
      } else {
        this.setState({
          formErrors: objectMap(json.errors, (v) => v.join(', '))
        })
      }
    })
  }

  setUser (propName) {
    return (e) => {
      let prop = e.target.value
      this.setState({
        user: {...this.state.user, [propName]: prop}
      })
    }
  }

  render () {
    return (
      <SignUpPage
        {...this.state}
        setUser={this.setUser.bind(this)}
        createUser={this.createUser.bind(this)}
      />
    )
  }
}

export default SignUpPageContainer
