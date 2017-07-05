import React, { Component, PropTypes } from 'react'
import Header from './../header'
import Footer from './../footer'
import includes from 'lodash.includes'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'

const onSignUpPage = location => location && includes(location.pathname, '/sign-up')

class InnerPage extends Component {
  constructor (props) {
    super(props)
    this.setContentPadding = this.setContentPadding.bind(this)
    this.state = {
      innerPageContentPadding: null,
      onSignUpPage: onSignUpPage(props.location)
    }
  }

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
    window.addEventListener('resize', this.setContentPadding)
    browserHistory.listen(location => {
      onSignUpPage(location)
        ? this.setContentPadding(0)
        : this.setContentPadding(this.banner.offsetHeight)
    })
  }

  setContentPadding (bannerOffset) {
    const calculatedBannerOffset = bannerOffset === undefined
      ? this.banner ? this.banner.offsetHeight : 0
      : bannerOffset
    const innerPageContentPadding = `${this.header.offsetHeight + calculatedBannerOffset}px`
    this.setState({ innerPageContentPadding })
  }

  render () {
    const { location, children, route } = this.props
    const { content, toggleLocale } = route
    const { innerPageContentPadding } = this.state
    const inRegistrationFlow = location && includes(location.pathname, '/sign-up')

    return (
      <div className='inner-page'>
        <Header
          content={content.header}
          toggleLocale={toggleLocale}
          inRegistrationFlow={inRegistrationFlow}
          getHeaderRef={el => { this.header = el }}
        />

        <div
          className='hotline-banner'
          ref={el => { this.banner = el }}
          style={{ opacity: onSignUpPage(location) ? 0 : 1 }}
        >
          <div className='hotline-banner-text'>
            <b>{content.hotlineBannerText}</b>
          </div>
        </div>

        <div
          className='inner-page__content'
          ref={el => { this.innerPageContent = el }}
          style={{ paddingTop: innerPageContentPadding }}
        >
          {React.cloneElement(children, { innerPageContentPadding })}
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
