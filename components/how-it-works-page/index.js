import React, { Component } from 'react'
import Header from './../header'
import Footer from './../footer'
import Intro from './../intro'
import Details from './details'
import Scroll from 'react-scroll'
import RaisedButton from 'material-ui/RaisedButton'
import ScrollDownBtn from './../scroll-down-btn'
const {Element} = Scroll

class HowItWorksPage extends Component {
  render () {
    return (
      <div className="how-it-works-page">
        <Header />
        <Element name="how-it-works-page__details">
          <Details />
        </Element>
        <Footer />
      </div>
    )
  }
}

export default HowItWorksPage
