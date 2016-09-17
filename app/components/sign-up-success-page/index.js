import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import InnerPage from './../inner-page'
import {Link} from 'react-router'

class SignUpSuccessPage extends Component {
  render () {
    return (
      <InnerPage location={this.props.location}>
        <div className="sign-up-success-page">
          <h1 className="sign-up-success-page__header">Thank you for joining the movement</h1>
          <h2 className="sign-up-success-page__subheader">we will keep you updated about when our pilot launches</h2>

          <div className="sign-up-success-page__panels">
            <div className="sign-up-success-page__get-in-touch-panel sign-up-success-page__panel">
              <h3 className="sign-up-success-page__panel-header">Get in touch with us.</h3>
              <a className="sign-up-success-page__link" href="mailto:hello@goodcall.nyc">hello@goodcall.nyc</a>
            </div>

            <div className="sign-up-success-page__follow-us-panel sign-up-success-page__panel">
              <h3 className="sign-up-success-page__panel-header">Follow us and stay updated.</h3>
              <a className="sign-up-success-page__link" href="https://twitter.com/GoodCallNYC">@goodcallnyc</a>
              {/*<a className="sign-up-success-page__link">#goodcallnyc</a>*/}
            </div>

            <div className="sign-up-success-page__learn-about-us-panel sign-up-success-page__panel">
              <h3 className="sign-up-success-page__panel-header">Learn about what we're doing</h3>
              <FlatButton
                className="gc-std-btn sign-up-success-page__mission-btn"
                containerElement={<Link to="/about-us"/>}
                label="read our mission"
                backgroundColor="#FDFFF9"
              />
            </div>
          </div>
        </div>
      </InnerPage>
    )
  }
}

export default SignUpSuccessPage
