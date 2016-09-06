import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class ContactUs extends Component {
  render () {
    return (
      <div className="landing-page__contact-us">
        <h2 className="landing-page__std-header">Help improve fairness today.</h2>
        <h3 className="landing-page__std-subheader">Join the cause.</h3>

        <RaisedButton
          className="landing-page__std-btn landing-page__sign-up-btn"
          label="sign up"
          backgroundColor="#40B097"
          labelColor="#FFFFFF"
        />
      </div>
    )
  }
}

export default ContactUs
