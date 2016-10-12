import React, { Component, PropTypes } from 'react'
import Header from './../header'
import Footer from './../footer'
import includes from 'lodash.includes'

class InnerPage extends Component {
  render () {
    const {content, toggleLocale} = this.props.route

    return (
      <div className='inner-page'>
        <Header
          content={content.header}
          toggleLocale={toggleLocale}
          inRegistrationFlow={this.props.location && includes(this.props.location.pathname, '/sign-up')}
        />
          {this.props.children}
        <Footer content={content.footer} />
      </div>
    )
  }
}

InnerPage.propTypes = {
  route: PropTypes.object,
  location: PropTypes.object,
  children: PropTypes.element
}

export default InnerPage
