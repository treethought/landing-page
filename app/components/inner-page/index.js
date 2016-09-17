import React, { Component } from 'react'
import Header from './../header'
import Footer from './../footer'

class InnerPage extends Component {
  render () {
    return (
      <div className="inner-page">
        <Header location={this.props.location}/>
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default InnerPage
