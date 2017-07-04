import React, { Component, PropTypes } from 'react'
import Header from './../header'
import Footer from './../footer'
import includes from 'lodash.includes'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'

class InnerPage extends Component {
  componentWillMount () {
    const { query, pathname } = this.props.location
    const { referredByCode } = query
    if (referredByCode) {
      cookie.save('referredByCode', referredByCode, { path: '/' })
      browserHistory.push({ pathname, query: null })
    }
  }

  componentDidMount () {
    this.setContentPadding()
    window.addEventListener('resize', this.setContentPadding.bind(this))
  }

  setContentPadding () {
    this.innerPageContent.style.paddingTop = `${85 + this.banner.offsetHeight}px`
  }

  render () {
    const { location, children, route } = this.props
    const { content, toggleLocale } = route
    const inRegistrationFlow = location && includes(location.pathname, '/sign-up')

    return (
      <div className='inner-page'>
        <Header
          content={content.header}
          toggleLocale={toggleLocale}
          inRegistrationFlow={inRegistrationFlow}
        />
        {!inRegistrationFlow && <div className='hotline-banner' ref={el => { this.banner = el }}>
          <div className='hotline-banner-text'>
            <b>{content.hotlineBannerText}</b>
          </div>
        </div>}
        <div className='inner-page__content' ref={el => { this.innerPageContent = el }}>
          {children}
        </div>
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
