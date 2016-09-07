import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import ScrollDownBtn from './../../scroll-down-btn'

class Intro extends Component {
  render () {
    return (
      <div className="how-it-works-page__intro">
        <div className="how-it-works-page__intro-main">
          <h1 className="how-it-works-page__intro-header">we got your back.</h1>

          <h2 className="how-it-works-page__intro-subheader">Call us if you’re arrested and we will alert a lawyer and your loved ones for you.</h2>

          <RaisedButton
            className="gc-std-btn how-it-works__intro-sign-up-btn"
            label="sign up for updates"
            backgroundColor="#40B097"
            labelColor="#FFFFFF"
            />
        </div>

        <ScrollDownBtn to="how-it-works-page__details" text="see what the call looks like"/>
      </div>
    )
  }
}

export default Intro
