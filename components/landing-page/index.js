import React, { Component } from 'react'
import Header from './header'
import Intro from './intro'
import HowItWorks from './how-it-works'
import AboutUs from './about-us'
import JoinTheCause from './join-the-cause'
import Footer from './footer'
import Scroll from 'react-scroll'
const {scroller, Element} = Scroll

class LandingPage extends Component {
  render () {
    return (
      <div className="landing-page">
        <Header />
        <Intro />
        <Element name="how-it-works">
          <HowItWorks />
        </Element>
        <AboutUs />
        <JoinTheCause />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
