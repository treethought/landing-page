import React, { Component } from 'react'
import renderIf from 'render-if'
import RaisedButton from 'material-ui/RaisedButton'

class HowItWorks extends Component {
  constructor (props) {
    super(props)
    let {content} = props
    this.state = {
      firstSteps: [
        {iconSrc: '/assets/imgs/arrested_icon.svg', text: content.step2Text},
        {iconSrc: '/assets/imgs/precinct_icon.svg', text: content.step3Text},
        {iconSrc: '/assets/imgs/phone_icon.svg', text: content.step4Text}
      ],
      callSubsteps: [
        {number: 1, text: content.step4substep1Text},
        {number: 2, text: content.step4substep2Text},
        {number: 3, text: content.step4substep3Text}
      ]
    }
  }

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

    const {content} = this.props

    return (
      <section className="how-it-works">
        <h2 className="how-it-works__header">{content.header}</h2>
        <h3 className="how-it-works__subheader"><em>{content.subheader}</em></h3>

        <ol className="how-it-works__step-list">
          <Step
            iconSrc='/assets/imgs/registration_icon.svg'
            text={content.step1Text}
            className="how-it-works__registration-step"
          />

          {this.state.firstSteps.map((step, i, arr) => (
            <div key={i}>
              <Step iconSrc={step.iconSrc} text={step.text} />
              {renderIf(i < arr.length - 1)(<Line type="vert" color="white" />)}
            </div>
          ))}

          {this.state.callSubsteps.map((substep, i) => (
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

          <Step text={content.step5Text} className="how-it-works__parallel-centered-row" customIcon={
            <div className="how-it-works__parallel-step-icon-container how-it-works__centered-row">
              <img className="how-it-works__step-icon how-it-works__parallel-step-icon how-it-works__lawyer-icon" src="/assets/imgs/lawyer_icon.svg" />
              <img className="how-it-works__step-icon how-it-works__parallel-step-icon how-it-works__family-icon" src="/assets/imgs/family_icon.svg" />
            </div>
          }/>

          <Branch type="upward" color="white" />

          <Line type="short-vert" color="white" />

          <Step iconSrc="/assets/imgs/free_icon.svg" text={content.step6Text} />
        </ol>
      </section>
    )
  }
}

export default HowItWorks
