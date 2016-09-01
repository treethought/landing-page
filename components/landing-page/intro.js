import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Intro extends Component {
  render () {
    return (
      <div className="landing-page__intro" name="landing-page__intro">
        <img className="landing-page__phone-img" src="./assets/imgs/phone_img.svg" />
        <img className="landing-page__handcuffs-img" src="./assets/imgs/handcuffs_img.svg" />

        <h2 className="landing-page__intro-header">[product definition of GC]</h2>

        <h3 className="landing-page__intro-subheader">
          No one expects to be arrested, but if you’re at the wrong place, at the wrong time, just call 1-800-GOOD CALL
        </h3>

        <RaisedButton
          className="landing-page__green-btn"
          label="sign up"
          backgroundColor="#40B097"
          labelColor="#FFFFFF"
        />

        <div className="landing-page__intro-see-how-it-works-txt">
          See how it works
        </div>
      </div>
    )
  }
}

export default Intro
