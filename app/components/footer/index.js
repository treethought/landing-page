import React, {Component} from 'react'
import {Grid, Row, Cell} from 'react-inline-grid'
import {Link} from 'react-router'

const helpLinks = [
  {to: '/sign-up', label: 'Sign Up'},
  {to: '/faq', label: 'FAQ'},
  {to: '/about-us', label: 'About Us'},
  {to: '/privacy-policy', label: 'Privacy Policy'},
]

class Footer extends Component {
  render () {
    return (
      <footer className="landing-page__footer">
        <Grid>
          <Row is="start">
            <Cell is="5 tablet-4">
              <div className="landing-page__footer-header">Contact Us</div>

              <div className="landing-page__footer-links-container">
                <address className="landing-page__footer-address-link-container">
                  <a href="https://www.google.com/maps?q=150+Court+St.+2nd+Floor,+Brooklyn+11201" className="landing-page__footer-link">150 Court St. 2nd Floor, Brooklyn 11201</a>
                </address>

                <a href="mailto:hello@goodcall.nyc" className="landing-page__footer-link">hello@goodcall.nyc</a>

                <div className="landing-page__footer-social-media-links-container">
                  <a href="https://twitter.com/GoodCallNYC" className="landing-page__footer-social-media-link">
                    <img src="/assets/imgs/twitter_icon.svg" className="landing-page__footer-social-media-link-icon" />
                  </a>
                  <a href="https://www.instagram.com/goodcallnyc/" className="landing-page__footer-social-media-link">
                    <img src="/assets/imgs/instagram_icon.svg" className="landing-page__footer-social-media-link-icon" />
                  </a>
                </div>
              </div>
            </Cell>

            <Cell is="3 tablet-4">
              <div className="landing-page__footer-header">Help</div>

              <div className="landing-page__footer-links-container">
                {helpLinks.map((link, i) => (
                  <Link key={i} to={link.to} className="landing-page__footer-link">{link.label}</Link>
                ))}
              </div>
            </Cell>

            <Cell is="4 tablet-4">
              <div className="landing-page__footer-header">Our Partners</div>

              <div className="landing-page__footer-links-container">
                <div>
                  <a className="landing-page__footer-link" href="https://labs.robinhood.org/">
                    <img src="/assets/imgs/blueridgelabs.png"></img>
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

export default Footer
