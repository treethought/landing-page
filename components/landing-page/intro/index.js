import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import ScrollDownBtn from './../../scroll-down-btn'

class Intro extends Component {
  render () {
    return (
      <div className="landing-page__intro">
        <img className="landing-page__phone-img" src="./assets/imgs/phone_img.svg" />
        <img className="landing-page__handcuffs-img" src="./assets/imgs/handcuffs_img.svg" />

        <h1 className="landing-page__intro-header">[product definition of GC]</h1>

        <p className="landing-page__intro-text">
          No one expects to be arrested, but if you’re at the wrong place, at the wrong time, just call 1-800-GOOD CALL
        </p>

        <RaisedButton
          className="gc-std-btn landing-page__intro-sign-up-btn"
          label="sign up"
          backgroundColor="#40B097"
          labelColor="#FFFFFF"
        />

        <ScrollDownBtn to="landing-page__how-it-works" text="See how it works"/>
      </div>
    )
  }
}

export default Intro
