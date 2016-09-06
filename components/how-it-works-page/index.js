import React, { Component } from 'react'
import Header from './../header'
import Footer from './../footer'
import Intro from './intro'
import Details from './details'
import Scroll from 'react-scroll'
const {Element} = Scroll

class HowItWorksPage extends Component {
  render () {
    return (
      <div className="how-it-works-page">
        <Header />
        <Intro />
        <Element name="how-it-works-page__details">
          <Details />
        </Element>
        <Footer />
      </div>
    )
  }
}

export default HowItWorksPage
