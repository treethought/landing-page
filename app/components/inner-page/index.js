import React, { Component } from 'react'
import Header from './../header'
import Footer from './../footer'

class InnerPage extends Component {
  render () {
    const {content} = this.props.route

    return (
      <div className="inner-page">
        <Header location={this.props.location} content={content.header} />
          {this.props.children}
        <Footer content={content.footer} />
      </div>
    )
  }
}

export default InnerPage
