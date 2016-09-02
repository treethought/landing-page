import React, { Component } from 'react'
import Header from './header.js'
import Intro from './intro.js'
import HowItWorks from './how-it-works.js'
import AboutUs from './about-us.js'
import ContactUs from './contact-us.js'
import Footer from './footer.js'

class LandingPage extends Component {
  render () {
    return (
      <div className="landing-page">
        <Header />
        <Intro />
        <HowItWorks />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
