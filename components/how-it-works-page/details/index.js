import React, { Component } from 'react'
import {Grid, Row, Cell} from 'react-inline-grid'
import renderIf from 'render-if'
import RaisedButton from 'material-ui/RaisedButton'

const firstSteps = [
  {iconSrc: './assets/imgs/arrested_icon.svg', text: 'you get unexpectedly arrested'},
  {iconSrc: './assets/imgs/precinct_icon.svg', text: 'you\'re brought to the precinct'},
  {iconSrc: './assets/imgs/phone_icon.svg', text: 'you call 1-800-GOODCALL'}
]

const callSubsteps = [
  {number: 1, text: 'we ask you for your name & cell number'},
  {number: 2, text: 'we tell you your rights'},
  {number: 3, text: 'we will ask you if you would like us to help you reach a loved one'},
  {number: 4, text: 'you record a voice message for your loved one'}
]

class Details extends Component {
  render () {
    let Step = ({iconSrc, text}) => (
      <li className="how-it-works-page__details-centered-row">
        <img className="how-it-works-page__step-icon" src={iconSrc} />
        <span className="how-it-works-page__step-horiz-separator"></span>
        <span className="how-it-works-page__step-text">{text}</span>
      </li>
    )

    let Line = ({type, color}) => (
      <div className={`how-it-works-page__line how-it-works-page__${type}-line how-it-works-page__${color}-line`}></div>
    )

    let Branch = ({type, color}) => (
      <div className={`how-it-works-page__branch how-it-works-page__${type}-branch how-it-works-page__${color}-branch`}></div>
    )

    return (
      <div className="how-it-works-page__details">
        <h2 className="how-it-works-page__details-header">Know what to expect.</h2>
        <h3 className="how-it-works-page__details-subheader">How it works</h3>

        <ol className="how-it-works-page__step-list">

          {firstSteps.map((step, i, arr) => (
            <div key={i}>
              <Step iconSrc={step.iconSrc} text={step.text} />

              {renderIf(i < arr.length - 1)(
                <Line type="vert" color="white" />
              )}
            </div>
          ))}

          {callSubsteps.map((substep, i) => (
            <div key={i}>
              <Line type="short-vert" color="green" />

              <li className="how-it-works-page__sub-step-row how-it-works-page__details-centered-row">
                <div className="how-it-works-page__sub-step-number-icon-container">
                  <div className="how-it-works-page__sub-step-number-container how-it-works-page__details-centered-row">
                    <div className="how-it-works-page__sub-step-number">{substep.number}</div>
                  </div>
                </div>
                <span className="how-it-works-page__step-horiz-separator"></span>

                <span className="how-it-works-page__step-text">{substep.text}</span>
              </li>
            </div>
          ))}

          <Line type="vert" color="green" />

          <Branch type="downward" color="green" />

          <li className="how-it-works-page__details-centered-row">
            <div className="how-it-works-page__parallel-step-icon-container how-it-works-page__details-centered-row">
              <img className="how-it-works-page__step-icon how-it-works-page__lawyer-icon" src="./assets/imgs/lawyer_icon.svg" />
              <img className="how-it-works-page__step-icon how-it-works-page__family-icon" src="./assets/imgs/family_icon.svg" />
            </div>
            <span className="how-it-works-page__step-horiz-separator"></span>
            <span className="how-it-works-page__step-text">Good Call will alert a lawyer for you and get your message to your loved ones</span>
          </li>

          <Branch type="upward" color="white" />

          <Line type="short-vert" color="white" />

          <Step iconSrc="./assets/imgs/free_icon.svg" text="You get released after arraignment" />
        </ol>

        <RaisedButton
          className="gc-std-btn how-it-works-page__details-sign-up-btn"
          label="sign up for updates"
          backgroundColor="#40B097"
          labelColor="#FFFFFF"
        />
      </div>
    )
  }
}

export default Details
