import React, { Component } from 'react'
import InnerPage from '../inner-page'
import Intro from './../intro'

class ErrorPage extends Component {
  render () {
    return (
      <div className="error-page">
        <InnerPage>
          <Intro heading="404" subheading="The page you requested does not exist">
          </Intro>
        </InnerPage>
      </div>
    )
  }
}

export default ErrorPage
