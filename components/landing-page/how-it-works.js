import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Cell } from 'react-inline-grid'

const steps = [
  {number: 1, iconSrc: './assets/imgs/signup_icon.svg', text: 'Provide us with an emergency contact'},
  {number: 2, iconSrc: './assets/imgs/phone_icon.svg', text: 'If you\'re arrested, call 1-800 GOOD CALL. Leave a message for your loved ones if you can\'t reach them.'},
  {number: 3, iconSrc: './assets/imgs/balance_icon.svg', text: 'If you\'re arrested, call 1-800 GOOD CALL. Leave a message for your loved ones.'}
]

class HowItWorks extends Component {
  render () {
    return (
      <div className="landing-page__how-it-works" name="landing-page__how-it-works">
        <h2 className="landing-page__how-it-works-header">Make your call count.</h2>
        <h3 className="landing-page__how-it-works-subheader">How it works</h3>

        <Grid>
          <Row is="around">
            {steps.map((step) => (
              <Cell is="3" key={step.number}>
                <img className="landing-page__how-it-works-icon" src={step.iconSrc}></img>
                <p className="landing-page__how-it-works-text">
                  <span className="landing-page__how-it-works-step-number">{step.number}</span>
                  {step.text}
                </p>
              </Cell>
            ))}
          </Row>
        </Grid>

        <RaisedButton
          className="landing-page__green-btn landing-page__sample-call-btn"
          label="try a sample call"
          backgroundColor="#40B097"
          labelColor="#FFFFFF"
        />
      </div>
    )
  }
}

export default HowItWorks
