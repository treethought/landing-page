import React, { Component, PropTypes } from 'react'
import Header from './../header'
import Footer from './../footer'
import includes from 'lodash.includes'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'
import { triggerEvent } from './../../services/ga'

class InnerPage extends Component {
  componentWillMount () {
    const { query, pathname } = this.props.location
    // TODO: refactor into service
    const { referredByCode } = query
    if (referredByCode) {
      cookie.save('referredByCode', referredByCode, { path: '/' })
      triggerEvent('referred-by-code-saved-to-cookie')
      browserHistory.push({ pathname, query: null })
    }
  }

  render () {
    const { content, toggleLocale } = this.props.route

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
