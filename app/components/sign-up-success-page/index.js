import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import InnerPage from './../inner-page'
import {Link} from 'react-router'

const ifConditions = [
  'You are arrested and are brought to the precinct in the Bronx',
  'You cannot reach your loved ones',
  'Someone you know gets arrested'
]

class SignUpSuccessPage extends Component {
  render () {
    return (
      <InnerPage location={this.props.location}>
        <div className="sign-up-success-page">
          <h1 className="sign-up-success-page__header">Thank you for joining our pilot in the Bronx!</h1>
          <p className="sign-up-success-page__paragraph">
            <span className="sign-up-success-page__call-number">Call (347) 95 BRONX</span>
            
            <span className="sign-up-success-page__if-container">
              <span className="sign-up-success-page__if-circle-container">
                <span className="sign-up-success-page__if-circle">
                  <span className="sign-up-success-page__if-text">
                    if
                   </span>
                 </span>
              </span>

              {ifConditions.map((condition, i) => (
                <span className="sign-up-success-page__if-condition" key={i}> {condition} </span>
              ))}

              <Link to="/faq" className="sign-up-success-page__faq-link">Have questions? Read our FAQ</Link>
            </span>
          </p>
        </div>
      </InnerPage>
    )
  }
}

export default SignUpSuccessPage
