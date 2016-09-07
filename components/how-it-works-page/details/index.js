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
    return (
      <div className="how-it-works-page__details">
        <h2 className="how-it-works-page__details-header">Know what to expect.</h2>
        <h3 className="how-it-works-page__details-subheader">How it works</h3>

        <ol className="how-it-works-page__step-list">

          {firstSteps.map((step, i, arr) => (
            <div key={i}>
              <li className="how-it-works-page__details-centered-row">
                <img className="how-it-works-page__step-icon" src={step.iconSrc} />
                <span className="how-it-works-page__step-horiz-separator"></span>
                <span className="how-it-works-page__step-text">{step.text}</span>
              </li>

              {renderIf(i < arr.length - 1)(
                <div className="how-it-works-page__line how-it-works-page__vert-white-line how-it-works-page__vert-line"></div>
              )}
            </div>
          ))}

          {callSubsteps.map((substep, i) => (
            <div key={i}>
              <div className="how-it-works-page__line how-it-works-page__short-vert-green-line how-it-works-page__vert-line"></div>

              <li className="how-it-works-page__details-centered-row">
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

          <div className="how-it-works-page__line how-it-works-page__vert-green-line how-it-works-page__vert-line"></div>

          <div className="how-it-works-page__line how-it-works-page__green-branched-line how-it-works-page__branched-line"></div>

          <li className="how-it-works-page__details-centered-row">
            <div className="how-it-works-page__parallel-step-icon-container how-it-works-page__details-centered-row">
              <img className="how-it-works-page__step-icon how-it-works-page__lawyer-icon" src="./assets/imgs/lawyer_icon.svg" />
              <img className="how-it-works-page__step-icon how-it-works-page__family-icon" src="./assets/imgs/family_icon.svg" />
            </div>
            <span className="how-it-works-page__step-horiz-separator"></span>
            <span className="how-it-works-page__step-text">Good Call will alert a lawyer for you and get your message to your loved ones</span>
          </li>

          <div className="how-it-works-page__line how-it-works-page__white-branched-line how-it-works-page__branched-line"></div>

          <div className="how-it-works-page__line how-it-works-page__short-vert-white-line how-it-works-page__vert-line"></div>

          <li className="how-it-works-page__details-centered-row">
            <img className="how-it-works-page__step-icon" src="./assets/imgs/free_icon.svg" />
            <span className="how-it-works-page__step-horiz-separator"></span>
            <span className="how-it-works-page__step-text">You get released after arraignment</span>
          </li>
        </ol>

        <RaisedButton
          className="gc-std-btn how-it-works__details-sign-up-btn"
          label="sign up for updates"
          backgroundColor="#40B097"
          labelColor="#FFFFFF"
        />
      </div>
    )
  }
}

export default Details
