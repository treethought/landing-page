import React, { Component } from 'react'
import Intro from './../intro'

class ErrorPage extends Component {
  render () {
    const {content} = this.props.route

    return (
      <div className="error-page">
        <Intro heading="404" subheading={content.subheader}>
        </Intro>
      </div>
    )
  }
}

export default ErrorPage
