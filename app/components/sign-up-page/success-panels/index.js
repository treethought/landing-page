import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router'

class SuccessPanels extends Component {
  render () {
    return (
      <div className="sign-up-page__success-panels">
        <h1 className="sign-up-page__success-panels-header">Thank you for joining the movement</h1>
        <h2 className="sign-up-page__success-panels-subheader">we will keep you updated about when our pilot launches</h2>

        <div className="sign-up-page__success-panels-panels">
          <div className="sign-up-page__get-in-touch-panel sign-up-page__success-panels-panel">
            <h3 className="sign-up-page__success-panels-panel-header">Get in touch with us.</h3>
            <a className="sign-up-page__success-panels-link" href="mailto:hello@goodcall.nyc">hello@goodcall.nyc</a>
          </div>

          <div className="sign-up-page__follow-us-panel sign-up-page__success-panels-panel">
            <h3 className="sign-up-page__success-panels-panel-header">Follow us and stay updated.</h3>
            <a className="sign-up-page__success-panels-link">@goodcallnyc</a>
            <a className="sign-up-page__success-panels-link">#goodcallnyc</a>
          </div>

          <div className="sign-up-page__learn-about-us-panel sign-up-page__success-panels-panel">
            <h3 className="sign-up-page__success-panels-panel-header">Learn about what we're doing</h3>
            <FlatButton
              className="gc-std-btn sign-up-page__success-panels-mission-btn"
              containerElement={<Link to="/about-us"/>}
              label="read our mission"
              backgroundColor="#FDFFF9"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SuccessPanels
