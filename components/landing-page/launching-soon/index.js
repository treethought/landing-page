import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class LaunchingSoon extends Component {
  render () {
    return (
      <section className="landing-page__launching-soon">
        <h2 className="landing-page__std-header landing-page__launching-soon-header">We are launching soon!</h2>
        <h3 className="landing-page__std-subheader"><em>Be a member today to get updates and to be part of our beta launch</em></h3>

        <RaisedButton
          className="gc-std-btn landing-page__launching-soon-sign-up-btn"
          label="sign up for updates"
          backgroundColor="#FDFFF9"
          labelColor="#4A4A4A"
        />
      </section>
    )
  }
}

export default LaunchingSoon
