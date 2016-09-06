import React, { Component } from 'react'
import Header from './header'
import Intro from './intro'
import HowItWorks from './how-it-works'
import AboutUs from './about-us'
import JoinTheCause from './join-the-cause'
import Footer from './footer'

class LandingPage extends Component {
  render () {
    return (
      <div className="landing-page">
        <Header />
        <Intro />
        <HowItWorks />
        <AboutUs />
        <JoinTheCause />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
