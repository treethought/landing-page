import React, { Component } from 'react'
import Header from './../header'
import AboutUs from './../landing-page/about-us'
import Footer from './../footer'

class InnerPage extends Component {
  render () {
    return (
      <div className="landing-page">
        <Header />
        <AboutUs />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default InnerPage
