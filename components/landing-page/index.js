import React, { Component } from 'react'
import Header from './../header'
import Stories from './stories'
import Mission from './mission'
import HowItWorks from './how-it-works'
import LaunchingSoon from './launching-soon'
import Footer from './../footer'
import Scroll from 'react-scroll'
const {Element} = Scroll

class LandingPage extends Component {
  render () {
    return (
      <div className="landing-page">
        <Header />
        <Stories />
        <Element name="landing-page__mission">
          <Mission />
        </Element>
        <section className="landing-page__blurb-container">
          <p className="landing-page__blurb">
            We are helping people who are arrested to reach their loved ones and to alert a lawyer earlier on in the arrest process for a more fair court outcome.
          </p>
        </section>
        <HowItWorks />
        <LaunchingSoon />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
