import React, { Component, PropTypes } from 'react'
import Stories from './stories'
import SimplePanel from './../simple-panel'
import Problem from './problem'
import HowItWorks from './how-it-works'
import LaunchingSoon from './launching-soon'
import Scroll from 'react-scroll'
const { Element } = Scroll

class LandingPage extends Component {
  render () {
    const { content } = this.props.route

    return (
      <div className='landing-page'>
        <Stories content={content.stories} />

        <Element name='landing-page__problem'>
          <Problem content={content.problem} />
        </Element>

        <SimplePanel
          color='rgba(45,43,43,0.99)'
          text={content.goodCallSummary}
          fontWeight='700'
        />

        <HowItWorks content={content.howItWorks} />

        <LaunchingSoon content={content.launchingSoon} />
      </div>
    )
  }
}

const { object } = PropTypes
LandingPage.propTypes = {
  route: object
}

export default LandingPage
