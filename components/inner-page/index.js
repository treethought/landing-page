import React, { Component } from 'react'
import Header from './../header'
import Footer from './../footer'

class InnerPage extends Component {
  render () {
    return (
      <div className="landing-page">
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default InnerPage
