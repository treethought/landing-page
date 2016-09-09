import React, { Component } from 'react'
import Header from './../header'
import Intro from './intro'
import HowItWorks from './how-it-works'
import Mission from './mission'
import JoinTheCause from './join-the-cause'
import Footer from './../footer'
import Scroll from 'react-scroll'
const {Element} = Scroll

class LandingPage extends Component {
  render () {
    return (
      <div className="landing-page">
        <Header />
        <Intro />
        <Mission />

        <section className="landing-page__blurb-container">
          <p className="landing-page__blurb">
            We are helping people who are arrested to reach their loved ones and to alert a lawyer earlier on in the arrest process for a more fair court outcome.
          </p>
        </section>

        <Element name="landing-page__how-it-works">
          <HowItWorks />
        </Element>

        <JoinTheCause />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
