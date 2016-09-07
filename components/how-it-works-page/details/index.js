import React, { Component } from 'react'
import {Grid, Row, Cell} from 'react-inline-grid'
import renderIf from 'render-if'

const firstSteps = [
  {iconSrc: './assets/imgs/arrested_icon.svg', text: 'you get unexpectedly arrested'},
  {iconSrc: './assets/imgs/precinct_icon.svg', text: 'your\'re brought to the precinct'},
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
    return (
      <div className="how-it-works-page__details">
        <h2 className="how-it-works-page__details-header">Know what to expect.</h2>
        <h3 className="how-it-works-page__details-subheader">How it works</h3>

        <ol className="how-it-works-page__step-list">

          {firstSteps.map((step, i, arr) => (
            <div key={i}>
              <li className="how-it-works-page__step-container">
                <img className="how-it-works-page__step-icon" src={step.iconSrc} />
                <span className="how-it-works-page__step-text">{step.text}</span>
              </li>

              {renderIf(i < arr.length - 1)(
                <div className="how-it-works-page__step-vert-white-line"></div>
              )}
            </div>
          ))}

          {callSubsteps.map((substep, i) => (
            <div key={i}>
              <div className="how-it-works-page__step-short-vert-green-line"></div>

              <li className="how-it-works-page__sub-step-container">
                <div className="how-it-works-page__sub-step-number-icon-container">
                  <div className="how-it-works-page__sub-step-number-container">
                    <div className="how-it-works-page__sub-step-number">{substep.number}</div>
                  </div>
                </div>

                <span className="how-it-works-page__step-text">{substep.text}</span>
              </li>
            </div>
          ))}
        </ol>
      </div>
    )
  }
}

export default Details
