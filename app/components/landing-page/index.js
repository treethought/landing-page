import React, {Component} from 'react'
import InnerPage from './../inner-page'
import Stories from './stories'
import Problem from './problem'
import HowItWorks from './how-it-works'
import LaunchingSoon from './launching-soon'
import Scroll from 'react-scroll'
const {Element} = Scroll

class LandingPage extends Component {
  render () {
    return (
      <InnerPage>
        <div className="landing-page">
          <Stories />
          <Element name="landing-page__problem">
            <Problem />
          </Element>
          <section className="landing-page__blurb-container">
            <p className="landing-page__blurb">
              Good Call is a completely free service that helps people who are arrested reach their loved ones and secure a free lawyer. Everyone deserves fairness. 
            </p>
          </section>
          <HowItWorks />
          <LaunchingSoon />
        </div>
      </InnerPage>
    )
  }
}

export default LandingPage
