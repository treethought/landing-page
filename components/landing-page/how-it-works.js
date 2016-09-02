import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Cell } from 'react-inline-grid'

class HowItWorks extends Component {
  render () {
    return (
      <div className="landing-page__how-it-works" name="landing-page__how-it-works">
        <h2 className="landing-page__how-it-works-header">Make your call count.</h2>
        <h3 className="landing-page__how-it-works-subheader">How it works</h3>

        <Grid>
          <Row is="around">
            <Cell is="3">
              <img className="landing-page__how-it-works-icon" src="./assets/imgs/signup_icon.svg"></img>
              <p className="landing-page__how-it-works-text">
                <div className="landing-page__how-it-works-step-number">1</div>
                Provide us with an emergency contact
              </p>
            </Cell>

            <Cell is="3">
              <img className="landing-page__how-it-works-icon" src="./assets/imgs/phone_icon.svg"></img>
              <p className="landing-page__how-it-works-text">
                <div className="landing-page__how-it-works-step-number">2</div>
                If you're arrested, call 1-800 GOOD CALL. Leave a message for your loved ones if you can't reach them.
              </p>
            </Cell>

            <Cell is="3">
              <img className="landing-page__how-it-works-icon" src="./assets/imgs/balance_icon.svg"></img>
              <p className="landing-page__how-it-works-text">
                <div className="landing-page__how-it-works-step-number">3</div>
                If you’re arrested, call 1-800 GOOD CALL. Leave a message for your loved ones.
              </p>
            </Cell>
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
