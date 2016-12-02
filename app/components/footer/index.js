import React, {Component, PropTypes} from 'react'
import {Grid, Row, Cell} from 'react-inline-grid'
import {Link} from 'react-router'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ourCompanyLinks: [
        {to: '/faq', label: props.content.faqLinkLabel},
        {to: '/about-us', label: props.content.aboutUsLinkLabel},
        {to: '/privacy-policy', label: props.content.privacyPolicyLinkLabel},
        {to: '/terms-and-conditions', label: props.content.termsAndConditionsLinkLabel}
        // {to: '/press-releases', label: props.content.pressReleasesLinkLabel}
      ]
    }
  }

  render () {
    const {content} = this.props

    return (
      <footer className='landing-page__footer'>
        <Grid>
          <Row is='start'>
            <Cell is='5 tablet-4'>
              <div className='landing-page__footer-header'>{content.contactUsHeader}</div>

              <div className='landing-page__footer-links-container'>
                <address className='landing-page__footer-address-link-container'>
                  <a href='https://www.google.com/maps?q=150+Court+St.+2nd+Floor,+Brooklyn+11201' className='landing-page__footer-link'>{content.address}</a>
                </address>

                <a href='mailto:hello@goodcall.nyc' className='landing-page__footer-link'>hello@goodcall.nyc</a>

                <div className='landing-page__footer-social-media-links-container'>
                  <a href='https://www.facebook.com/goodcallnyc' className='landing-page__footer-social-media-link'>
                    <img src='/assets/imgs/facebook_icon.svg' className='landing-page__footer-social-media-link-icon' />
                  </a>
                  <a href='https://twitter.com/GoodCallNYC' className='landing-page__footer-social-media-link'>
                    <img src='/assets/imgs/twitter_icon.svg' className='landing-page__footer-social-media-link-icon' />
                  </a>
                  <a href='https://www.instagram.com/goodcallnyc/' className='landing-page__footer-social-media-link'>
                    <img src='/assets/imgs/instagram_icon.svg' className='landing-page__footer-social-media-link-icon' />
                  </a>
                </div>
              </div>
            </Cell>

            <Cell is='3 tablet-4'>
              <div className='landing-page__footer-header'>{content.ourCompanyHeader}</div>

              <div className='landing-page__footer-links-container'>
                <a href='https://igg.me/at/C42BDfXWM58' className='landing-page__footer-link'>{content.donateBtnLabel}</a>
                {this.state.ourCompanyLinks.map((link, i) => (
                  <Link key={i} to={link.to} className='landing-page__footer-link'>{link.label}</Link>
                ))}
              </div>
            </Cell>

            <Cell is='4 tablet-4'>
              <div className='landing-page__footer-header'>{content.ourPartnersHeader}</div>

              <div className='landing-page__footer-links-container'>
                <div>
                  <a className='landing-page__footer-link' href='https://labs.robinhood.org/'>
                    <img src='/assets/imgs/blueridgelabs.png'></img>
                  </a>
                </div>
              </div>
            </Cell>
          </Row>
        </Grid>
      </footer>
    )
  }
}

Footer.propTypes = {
  content: PropTypes.object
}

export default Footer
