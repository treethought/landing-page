import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import SvgIcon from 'material-ui/SvgIcon'
import urlencode from 'urlencode'
import { trackRegistrationEvent, trackShareEvent } from './../../services/ga'

class SignUpSuccessPage extends Component {
  componentDidMount () {
    trackRegistrationEvent(null, 'success')
  }

  trackShareEvent (action) {
    return () => trackShareEvent(action)
  }

  render () {
    const { content } = this.props.route
    const { referralCode } = this.props.location.query

    const referralLink = referralCode
      ? `https://goodcall.nyc/?referredByCode=${referralCode}`
      : 'https://goodcall.nyc/'

    const EmailIcon = (props) => (
      <SvgIcon {...props} viewBox='0 0 512 512' color='white'>
        <path d='M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z' />
      </SvgIcon>
    )

    const FacebookIcon = (props) => (
      <SvgIcon {...props} viewBox='0 0 512 512' color='white'>
        <path stroke='white' d='M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z' />
      </SvgIcon>
    )

    const TwitterIcon = (props) => (
      <SvgIcon {...props} viewBox='0 0 512 512' color='white'>
        <path d='M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z' />
      </SvgIcon>
    )

    return (
      <div className='sign-up-success-page'>
        <h1 className='sign-up-success-page__header'>{content.header}</h1>

        <div className='sign-up-success-page__content'>
          <p className='sign-up-success-page__paragraph'>
            <span className='sign-up-success-page__call-number'>
              {content.callText} <br />
              <strong>1-(833)-3-GOODCALL</strong>
            </span>

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

          <div className='sign-up-success-page__share-container'>
            <div className='sign-up-success-page__share-header'>{ content.tellYourFriends }</div>

            <span className='sign-up-success-page__share-link-text'>{ content.copyAndShare }</span>

            <textarea className='sign-up-success-page__share-link' defaultValue={referralLink} onSelect={this.trackShareEvent('link')} readOnly='true' />

            <span className='sign-up-success-page__share-btns-text'>{ content.orShareOnSocialMedia }</span>

            <FlatButton
              target='_blank'
              href={`mailto:?subject=${urlencode(content.emailSubject)}&body=${urlencode(content.emailBody(referralLink))}`}
              className='gc-std-btn sign-up-success-page__share-btn'
              style={{ backgroundColor: '#40B097' }}
              label={'Email'}
              icon={<EmailIcon />}
              onClick={this.trackShareEvent('email')}
            />

            <FlatButton
              target='_blank'
              href={`
                https://www.facebook.com/sharer.php?caption=${urlencode('goodcall.nyc')}&description=${urlencode(content.facebookDescription)}&u=${referralLink}&picture=https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_225,w_380/v1479685221/uocbe8twmfqqnrgjom0j.png
              `}
              className='gc-std-btn sign-up-success-page__share-btn'
              style={{ backgroundColor: '#2D4C8D' }}
              label={'Facebook'}
              icon={<FacebookIcon />}
              onClick={this.trackShareEvent('facebook')}
            />

            <FlatButton
              target='_blank'
              href={`https://twitter.com/intent/tweet?text=${urlencode(content.twitterTweet(referralLink))}`}
              className='gc-std-btn sign-up-success-page__share-btn'
              style={{ backgroundColor: '#0098F8' }}
              label={'Twitter'}
              icon={<TwitterIcon />}
              onClick={this.trackShareEvent('twitter')}
            />
          </div>
        </div>
      </div>
    )
  }
}

SignUpSuccessPage.propTypes = {
  location: PropTypes.object,
  route: PropTypes.object
}

export default SignUpSuccessPage
