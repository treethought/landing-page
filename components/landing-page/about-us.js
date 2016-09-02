import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Cell } from 'react-inline-grid'

const steps = [
  {number: 1, iconSrc: './assets/imgs/signup_icon.svg', text: 'Provide us with an emergency contact'},
  {number: 2, iconSrc: './assets/imgs/phone_icon.svg', text: 'If you\'re arrested, call 1-800 GOOD CALL. Leave a message for your loved ones if you can\'t reach them.'},
  {number: 3, iconSrc: './assets/imgs/balance_icon.svg', text: 'If you\'re arrested, call 1-800 GOOD CALL. Leave a message for your loved ones.'}
]

class AboutUs extends Component {
  render () {
    return (
      <div className="landing-page__about-us">
        <h2 className="landing-page__std-header">Everyone deserves fairness.</h2>
        <h3 className="landing-page__std-subheader">Our mission</h3>

        <p className="landing-page__about-us-text">
          lorem ipsum something something. To improve fairness in the arrest process by connecting people with a lawyer. We believe that everyone should have procedural justice blah blah blah.
        </p>

        <RaisedButton
          className="landing-page__manifesto-btn"
          label="read our manifesto"
          backgroundColor="#F6E36B"
          labelColor="#4A4A4A"
        />
      </div>
    )
  }
}

export default AboutUs
