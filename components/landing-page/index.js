import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class LandingPage extends Component {
  render () {
    return (
      <div className="landing-page">
        <div className="landing-page__header">
          <RaisedButton label="O SHIT" />
        </div>

        <div className="landing-page__intro-panel"></div>

        <div className="landing-page__mission-panel"></div>

        <div className="landing-page__contact-panel"></div>

        <div className="landing-page__footer"></div>
      </div>
    )
  }
}

export default LandingPage
