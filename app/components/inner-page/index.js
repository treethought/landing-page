import React, { Component, PropTypes } from 'react'
import Header from './../header'
import Footer from './../footer'
import includes from 'lodash.includes'

class InnerPage extends Component {
  render () {
    const {content, setLocale, locale} = this.props.route
    const localeToSwitchTo = locale === 'en' ? 'es' : 'en'

    return (
      <div className='inner-page'>
        <Header
          content={content.header}
          inRegistrationFlow={this.props.location && includes(this.props.location.pathname, '/sign-up')}
        />
          <div
            style={{
              position: 'fixed',
              top: '200px',
              left: '40px',
              zIndex: '2000',
              background: 'red',
              color: 'white',
              padding: '20px',
              cursor: 'pointer',
              display: 'none'
            }}
            onClick={setLocale(localeToSwitchTo)}
          >
            {`switch to ${locale === 'en' ? 'spanish' : 'english'}`}
          </div>
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
