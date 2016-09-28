import React, {Component} from 'react'
import {Grid, Row, Cell} from 'react-inline-grid'
import {Link} from 'react-router'

class Footer extends Component {
  render () {
    return (
      <footer className="landing-page__footer">
        <Grid>
          <Row is="start">
            <Cell is="5 tablet-4">
              <div className="landing-page__footer-header">Contact Us</div>

              <address className="landing-page__footer-links-container">
                <a href="https://www.google.com/maps?q=150+Court+St.+2nd+Floor,+Brooklyn+11201" className="landing-page__footer-link">150 Court St. 2nd Floor, Brooklyn 11201</a>
                <a href="mailto:hello@goodcall.nyc" className="landing-page__footer-link">hello@goodcall.nyc</a>
              </address>
            </Cell>

            <Cell is="3 tablet-4">
              <div className="landing-page__footer-header">Help</div>

              <div className="landing-page__footer-links-container">
                <Link to="/sign-up" className="landing-page__footer-link">Sign Up</Link>
                <Link to="/about-us" className="landing-page__footer-link">About Us</Link>
                <Link to="/privacy-policy" className="landing-page__footer-link">Privacy Policy</Link>
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
