import React, { Component } from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'

class Footer extends Component {
  render () {
    return (
      <div className="landing-page__footer">
        <div className="landing-page__footer-link-container">
          <Grid>
            <Row is="start">
              <Cell is="5">
                <div className="landing-page__footer-header">Contact Us</div>
                <div className="landing-page__footer-link">150 Court St. 2nd Floor, Brooklyn 11201</div>
                <div className="landing-page__footer-link">hello@goodcall.com</div>
              </Cell>

              <Cell is="5">
                <div className="landing-page__footer-header">Help</div>
                <div className="landing-page__footer-link">Privacy Policy</div>
                <div className="landing-page__footer-link">Terms & Conditions</div>
                <div className="landing-page__footer-link">Your Rights</div>
              </Cell>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Footer
