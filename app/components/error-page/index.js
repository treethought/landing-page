import React, { Component, PropTypes } from 'react'

class ErrorPage extends Component {
  render () {
    const { content } = this.props.route

    return (
      <div className="error-page">
        <h1 className="error-page__header">404</h1>
        <h2 className="error-page__subheader">{content.subheader}</h2>
      </div>
    )
  }
}

ErrorPage.propTypes = {
  route: PropTypes.object
}

export default ErrorPage
