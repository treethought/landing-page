import React, { Component } from 'react'
import renderIf from 'render-if'
import RaisedButton from 'material-ui/RaisedButton'

const firstSteps = [
  {iconSrc: '/assets/imgs/arrested_icon.svg', text: 'you are unexpectedly arrested'},
  {iconSrc: '/assets/imgs/precinct_icon.svg', text: 'you are brought to the precinct'},
  {iconSrc: '/assets/imgs/phone_icon.svg', text: 'you call Good Call at\n (347) 95-BRONX'}
]

const callSubsteps = [
  {number: 1, text: 'we collect your information'},
  {number: 2, text: 'we tell you your rights'},
  {number: 3, text: 'we confirm your emergency contact'}
]

class HowItWorks extends Component {
  render () {
    let Step = ({iconSrc, text, className = "", customIcon}) => (
      <li className={"how-it-works__centered-row " + className}>
        {renderIf(customIcon) (customIcon)}
        {renderIf(!customIcon) (<img className="how-it-works__step-icon" src={iconSrc} />)}
        <span className="how-it-works__step-horiz-separator"></span>
        <span className="how-it-works__step-text">{text}</span>
      </li>
    )

    let Line = ({type, color}) => (
      <div className={`how-it-works__line how-it-works__${type}-line how-it-works__${color}-line`}></div>
    )

    let Branch = ({type, color}) => (
      <div className={`how-it-works__branch how-it-works__${type}-branch how-it-works__${color}-branch`}></div>
    )

    return (
      <section className="how-it-works">
        <h2 className="how-it-works__header">Introducing Good Call</h2>
        <h3 className="how-it-works__subheader"><em>How it works</em></h3>

        <ol className="how-it-works__step-list">
          <Step
            iconSrc='/assets/imgs/registration_icon.svg'
            text="you sign up for Good Call and list an emergency contact"
            className="how-it-works__registration-step"
          />

          {firstSteps.map((step, i, arr) => (
            <div key={i}>
              <Step iconSrc={step.iconSrc} text={step.text} />
              {renderIf(i < arr.length - 1)(<Line type="vert" color="white" />)}
            </div>
          ))}

          {callSubsteps.map((substep, i) => (
            <div key={i}>
              <Line type="short-vert" color="green" />

              <Step className="how-it-works__sub-step-row" text={substep.text} customIcon={
                <div className="how-it-works__sub-step-number-icon-container">
                  <div className="how-it-works__sub-step-number-container how-it-works__centered-row">
                    <div className="how-it-works__sub-step-number">{substep.number}</div>
                  </div>
                </div>
              }/>
            </div>
          ))}

          <Line type="vert" color="green" />

          <Branch type="downward" color="green" />

          <Step text="Good Call will alert your emergency contact and get a lawyer on your case right away" className="how-it-works__parallel-centered-row" customIcon={
            <div className="how-it-works__parallel-step-icon-container how-it-works__centered-row">
              <img className="how-it-works__step-icon how-it-works__parallel-step-icon how-it-works__lawyer-icon" src="/assets/imgs/lawyer_icon.svg" />
              <img className="how-it-works__step-icon how-it-works__parallel-step-icon how-it-works__family-icon" src="/assets/imgs/family_icon.svg" />
            </div>
          }/>

          <Branch type="upward" color="white" />

          <Line type="short-vert" color="white" />

          <Step iconSrc="/assets/imgs/free_icon.svg" text="you can return home as soon as possible" />
        </ol>
      </section>
    )
  }
}

export default HowItWorks
