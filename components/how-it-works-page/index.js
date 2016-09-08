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
        <Intro heading="we got your back." subheading="Call us if you’re arrested and we will alert a lawyer and your loved ones for you.">
          <RaisedButton
            className="gc-std-btn how-it-works__intro-sign-up-btn"
            label="sign up for updates"
            backgroundColor="#40B097"
            labelColor="#FFFFFF"
          />

          <ScrollDownBtn to="how-it-works-page__details" text="see what the call looks like"/>
        </Intro>
        <Element name="how-it-works-page__details">
          <Details />
        </Element>
        <Footer />
      </div>
    )
  }
}

export default HowItWorksPage
