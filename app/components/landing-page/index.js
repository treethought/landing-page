import React, { Component } from 'react'
import { func, object } from 'prop-types'
import Stories from './stories'
import SimplePanel from './../simple-panel'
import Problem from './problem'
import HowItWorks from './how-it-works'
import LaunchingSoon from './launching-soon'
import Scroll from 'react-scroll'
const { Element } = Scroll

class LandingPage extends Component {
  render () {
    const { getInnerPageContent, route } = this.props
    const { content } = route

    return (
      <div className='landing-page'>
        <Stories content={content.stories} getInnerPageContent={getInnerPageContent} />

        <Element name='landing-page__summary'>
          <SimplePanel
            text={content.goodCallSummary}
            backgroundColor='#4A4A4A'
            color='#FDFFF9'
          />
        </Element>

        <Problem content={content.problem} />

        <HowItWorks content={content.howItWorks} />

        <LaunchingSoon content={content.launchingSoon} />
      </div>
    )
  }
}

LandingPage.propTypes = {
  getInnerPageContent: func,
  route: object
}

export default LandingPage
