import React, { Component, PropTypes } from 'react'
import Header from './../header'
import Footer from './../footer'
import includes from 'lodash.includes'

class InnerPage extends Component {
  inRegistrationOrLoginFlow () {
    const { location } = this.props
    return location && (includes(location.pathname, '/sign-up') || includes(location.pathname, '/login'))
  }

  render () {
    const {content, toggleLocale} = this.props.route

    return (
      <div className='inner-page'>
        <Header
          content={content.header}
          toggleLocale={toggleLocale}
          inRegistrationOrLoginFlow={this.inRegistrationOrLoginFlow()}
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
