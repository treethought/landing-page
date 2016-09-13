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
              We are helping people who are arrested to reach their loved ones and to alert a lawyer earlier on in the arrest process for a more fair court outcome.
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
