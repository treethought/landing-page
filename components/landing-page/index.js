import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import $ from 'jquery'
import Header from './header.js'
import Intro from './intro.js'
import HowItWorks from './how-it-works.js'

class LandingPage extends Component {
  scrollTo (ref) {
    return () => {
      let $targetEl = $(findDOMNode(this.refs[ref])), $thisEl = $(findDOMNode(this))
      $('html, body').animate({
        scrollTop: $targetEl.offset().top - parseInt($thisEl.css('margin-top'))
      }, 500)
    }
  }

  render () {
    return (
      <div className="landing-page">
        <Header
          scrollToIntro={this.scrollTo('intro').bind(this)}
          scrollToHowItWorks={this.scrollTo('how-it-works').bind(this)}
        />
        <Intro ref="intro"/>
        <HowItWorks ref="how-it-works"/>
      </div>
    )
  }
}

export default LandingPage
