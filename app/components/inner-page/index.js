import React, { Component } from 'react'
import Header from './../header'
import Footer from './../footer'
import includes from 'lodash.includes'

class InnerPage extends Component {
  render () {
    return (
      <div className="inner-page">
        <Header inRegistrationFlow={this.props.location && includes(this.props.location.pathname, '/sign-up')} />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default InnerPage
