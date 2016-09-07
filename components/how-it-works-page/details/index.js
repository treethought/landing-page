import React, { Component } from 'react'
import {Grid, Row, Cell} from 'react-inline-grid'
import renderIf from 'render-if'

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
          <li className="how-it-works-page__step-container">
            <img className="how-it-works-page__step-icon" src="./assets/imgs/arrested_icon.svg" />
            <span className="how-it-works-page__step-text">you get unexpectedly arrested</span>
          </li>

          <div className="how-it-works-page__step-vert-white-line"></div>

          <li className="how-it-works-page__step-container">
            <img className="how-it-works-page__step-icon" src="./assets/imgs/precinct_icon.svg" />
            <span className="how-it-works-page__step-text">you're brought to precinct</span>
          </li>

          <div className="how-it-works-page__step-vert-white-line"></div>

          <li className="how-it-works-page__step-container">
            <img className="how-it-works-page__step-icon" src="./assets/imgs/phone_icon.svg" />
            <span className="how-it-works-page__step-text">you call 1-800-GOODCALL</span>
          </li>

          <div className="how-it-works-page__step-short-vert-green-line"></div>

          {callSubsteps.map((substep, i, arr) => (
            <div key={i}>
              <li className="how-it-works-page__sub-step-container">
                <div className="how-it-works-page__sub-step-number-icon-container">
                  <div className="how-it-works-page__sub-step-number-container">
                    <div className="how-it-works-page__sub-step-number">{substep.number}</div>
                  </div>
                </div>

                <span className="how-it-works-page__step-text">{substep.text}</span>
              </li>

              {renderIf(i < arr.length - 1)(
                <div className="how-it-works-page__step-short-vert-green-line"></div>
              )}
            </div>
          ))}
        </ol>
      </div>
    )
  }
}

export default Details
