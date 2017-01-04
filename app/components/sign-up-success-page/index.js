import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class SignUpSuccessPage extends Component {
  render () {
    const {content} = this.props.route

    return (
      <div className='sign-up-success-page'>
        <h1 className='sign-up-success-page__header'>{content.header}</h1>
        <p className='sign-up-success-page__paragraph'>
          <span className='sign-up-success-page__call-number'>{content.callText} (347) 95 BRONX</span>

          <span className='sign-up-success-page__if-container'>
            <span className='sign-up-success-page__if-circle-container'>
              <span className='sign-up-success-page__if-circle'>
                <span className='sign-up-success-page__if-text'>
                  {content.ifText}
                </span>
              </span>
            </span>

            {content.ifConditions.map((condition, i) => (
              <span className='sign-up-success-page__if-condition' key={i}> {condition} </span>
            ))}

            <Link to='/faq' className='sign-up-success-page__faq-link'>{content.faqLinkText}</Link>
          </span>
        </p>

        <script>
          fbq('track', 'CompleteRegistration');
        </script>
      </div>
    )
  }
}

SignUpSuccessPage.propTypes = {
  location: PropTypes.object,
  route: PropTypes.object
}

export default SignUpSuccessPage
