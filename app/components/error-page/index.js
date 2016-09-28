import React, { Component } from 'react'
import Intro from './../intro'

class ErrorPage extends Component {
  render () {
    return (
      <div className="error-page">
        <Intro heading="404" subheading="The page you requested does not exist">
        </Intro>
      </div>
    )
  }
}

export default ErrorPage
