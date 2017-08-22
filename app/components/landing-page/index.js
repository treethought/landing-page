import React, { Component } from 'react'
import { string, object } from 'prop-types'
import Call from './call'
import Problem from './problem'
import HowItWorks from './how-it-works'
import Press from './press'
import LaunchingSoon from './launching-soon'

class LandingPage extends Component {
  render () {
    const { innerPageContentPadding, route } = this.props
    const { content } = route

    return (
      <div className='landing-page'>
        <Call content={content.call} height={`calc(100vh - ${innerPageContentPadding})`} />

        <Problem content={content.problem} />

        <HowItWorks content={content.howItWorks} />

        <Press content={content.press} />

        <LaunchingSoon content={content.launchingSoon} />
      </div>
    )
  }
}

LandingPage.propTypes = {
  innerPageContentPadding: string,
  route: object
}

export default LandingPage
