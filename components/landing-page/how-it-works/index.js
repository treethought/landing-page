import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Cell } from 'react-inline-grid'
import MediaQuery from 'react-responsive'

const steps = [
  {number: 1, iconSrc: './assets/imgs/signup_icon.svg', header: '1.  Become a member for free', text: 'Become a member for free by provide us with an emergency contact'},
  {number: 2, iconSrc: './assets/imgs/phone_icon.svg', header: '2. Call us if you’re arrested', text: 'Call us and give us your name then leave a message for your loved ones if you can’t reach them.'},
  {number: 3, iconSrc: './assets/imgs/balance_icon.svg', header: '3. Know we got your back', text: 'We will alert a lawyer and call your loved ones to let them know you’re okay.'}
]

class HowItWorks extends Component {
  render () {
    let Step = ({step}) => (
      <Cell is="4 tablet-6">
        <li>
          <img className="landing-page__how-it-works-icon" src={step.iconSrc}></img>
          <h4 className="landing-page__how-it-works-step-header">{step.header}</h4>
          <p className="landing-page__how-it-works-text">
            {step.text}
          </p>
        </li>
      </Cell>
    )

    return (
      <div className="landing-page__how-it-works">
        <h2 className="landing-page__std-header">Make your call count.</h2>
        <h3 className="landing-page__std-subheader"><em>How it works</em></h3>

        <Grid>
          <ol className="landing-page__how-it-works-step-list">
            <MediaQuery query="(min-width: 850px)">
              <Row is="around" style={{'padding': 0}}>
                {steps.map((step) => (
                  <Step step={step} key={step.number}/>
                ))}
              </Row>
            </MediaQuery>

            <MediaQuery query="(max-width: 849px)">
              {steps.map((step) => (
                <Row is="center" key={step.number} style={{'padding': 0}}>
                  <Step step={step} />
                </Row>
              ))}
            </MediaQuery>
          </ol>
        </Grid>

        <RaisedButton
          className="gc-std-btn landing-page__sample-call-btn"
          label="try a sample call"
          backgroundColor="#40B097"
          labelColor="#FFFFFF"
        />
      </div>
    )
  }
}

export default HowItWorks
