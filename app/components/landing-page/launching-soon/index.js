import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'

class LaunchingSoon extends Component {
  render () {
    return (
      <section className="landing-page__launching-soon">
        <h2 className="landing-page__std-header landing-page__launching-soon-header">We are launching soon!</h2>
        <h3 className="landing-page__std-subheader landing-page__launching-soon-subheader"><em>Sign up to get updates and to be part of our beta launch</em></h3>

        <FlatButton
          className="landing-page__launching-soon-sign-up-btn"
          label="join our movement"
        />
      </section>
    )
  }
}

export default LaunchingSoon
