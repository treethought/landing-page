import React, { Component } from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'

class Footer extends Component {
  render () {
    return (
      <div className="landing-page__footer">
        <div className="landing-page__footer-link-container">
          <Grid>
            <Row is="start">
              <Cell is="5 tablet-4">
                <div className="landing-page__footer-header">Contact Us</div>
                <a className="landing-page__footer-link">150 Court St. 2nd Floor, Brooklyn 11201</a>
                <a className="landing-page__footer-link">hello@goodcall.com</a>
              </Cell>

              <Cell is="5 tablet-4">
                <div className="landing-page__footer-header">Help</div>
                <a className="landing-page__footer-link">Privacy Policy</a>
                <a className="landing-page__footer-link">Terms & Conditions</a>
                <a className="landing-page__footer-link">Your Rights</a>
              </Cell>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Footer
