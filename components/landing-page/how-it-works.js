import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class HowItWorks extends Component {
  render () {
    return (
      <div className="landing-page__how-it-works" name="landing-page__how-it-works">
        <h2 className="landing-page__subheader">How It Works</h2>
        <p className="landing-page__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <RaisedButton
          className="landing-page__learn-more-btn"
          label="ima button"
          primary={true}
        />
      </div>
    )
  }
}

export default HowItWorks
