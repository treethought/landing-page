import React, {Component} from 'react'
import InnerPage from './../inner-page'
import renderIf from 'render-if'

class LoginPage extends Component {
  render () {
    return (
      <InnerPage>
        {renderIf(this.props.location.state.errorMessage) (
          <h1>ERROR: {this.props.location.state.errorMessage}</h1>
        )}
        <h1>LOGIN PAGE</h1>
      </InnerPage>
    )
  }
}

export default LoginPage
