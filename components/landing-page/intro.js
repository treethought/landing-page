import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Intro extends Component {
  render () {
    return (
      <div className="landing-page__intro" name="landing-page__intro">
        <h2 className="landing-page__subheader">Intro Panel</h2>
        <p className="landing-page__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <RaisedButton
          className="landing-page__learn-more-btn"
          label="Learn More"
          primary={true}
        />
      </div>
    )
  }
}

export default Intro
