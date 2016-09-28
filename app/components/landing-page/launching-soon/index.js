import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router'

class LaunchingSoon extends Component {
  render () {
    return (
      <section className="landing-page__launching-soon">
        <h2 className="landing-page__std-header landing-page__launching-soon-header">Sign up for free for our pilot in the Bronx</h2>
        <h3 className="landing-page__std-subheader landing-page__launching-soon-subheader"><em>Because no one expects to get arrested.</em></h3>

        <FlatButton
          label="sign up"
          className="gc-std-btn"
          containerElement={<Link to="/sign-up" />}
        />
      </section>
    )
  }
}

export default LaunchingSoon
