import React, { Component } from 'react'
import InnerPage from '../inner-page'
import Intro from './../intro'
import Problem from './../landing-page/problem'

class AboutPage extends Component {
  render () {
    return (
      <InnerPage>
        <Intro heading="About us" subheading="Some text here">
          <p>More, more more</p>
        </Intro>
        <Problem />
      </InnerPage>
    )
  }
}

export default AboutPage;
