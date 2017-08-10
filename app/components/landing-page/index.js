import React, { Component } from 'react'
import { string, object } from 'prop-types'
import Stories from './stories'
import SimplePanel from './../simple-panel'
import Problem from './problem'
import HowItWorks from './how-it-works'
import Press from './press'
import LaunchingSoon from './launching-soon'
import Scroll from 'react-scroll'
const { Element } = Scroll

class LandingPage extends Component {
  render () {
    const { innerPageContentPadding, route } = this.props
    const { content } = route

    return (
      <div className='landing-page'>
        <Stories content={content.stories} height={`calc(100vh - ${innerPageContentPadding})`} />

        <Element name='landing-page__summary'>
          <SimplePanel
            text={content.goodCallSummary}
            backgroundColor='#4A4A4A'
            color='#FDFFF9'
          />
        </Element>

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
