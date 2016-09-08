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
        <Element name="landing-page__how-it-works">
          <HowItWorks />
        </Element>
        <Mission />
        <JoinTheCause />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
