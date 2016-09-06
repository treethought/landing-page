import React, { Component } from 'react'
import Header from './../header'
import Footer from './../footer'
import Scroll from 'react-scroll'
const {scroller, Element} = Scroll

class HowItWorksPage extends Component {
  render () {
    return (
      <div className="how-it-works-page">
        <Header />
        <h1>
          HELLO WORLD
        </h1>
        <Footer />
      </div>
    )
  }
}

export default HowItWorksPage
