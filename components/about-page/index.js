import React, { Component } from 'react'
import InnerPage from '../inner-page'
import Intro from './../intro'
import Mission from './../landing-page/mission'

class AboutPage extends Component {
  render () {
    return (
      <InnerPage>
        <Intro heading="About us" subheading="Some text here">
          <p>More, more more</p>
        </Intro>
        <Mission />
      </InnerPage>
    )
  }
}

export default AboutPage;
