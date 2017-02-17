import React, { Component, PropTypes } from 'react'
import Header from './../header'
import Footer from './../footer'
import includes from 'lodash.includes'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'
import ga from './../../services/ga'

class InnerPage extends Component {
  componentWillMount () {
    const { query, pathname } = this.props.location
    const { referredByCode } = query
    if (referredByCode) {
      cookie.save('referredByCode', referredByCode, { path: '/' })
      ga.triggerEvent('referred-by-code-saved-to-cookie', { referredByCode })()
      browserHistory.push({ pathname, query: null })
    }
  }

  render () {
    const { location, children, route } = this.props
    const { content, toggleLocale } = route

    return (
      <div className='inner-page'>
        <Header
          content={content.header}
          toggleLocale={toggleLocale}
          inRegistrationFlow={location && includes(location.pathname, '/sign-up')}
        />
        {children}
        <Footer content={content.footer} />
      </div>
    )
  }
}

const { object, element } = PropTypes
InnerPage.propTypes = {
  route: object,
  location: object,
  children: element
}

export default InnerPage
