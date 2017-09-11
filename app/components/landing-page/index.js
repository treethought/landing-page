import React, { Component } from 'react'
import { string, object } from 'prop-types'
import Call from './call'
import Summary from './summary'
import LovedOnes from './loved-ones'
import Lawyer from './lawyer'
import Partners from './partners'
import WhyWeExist from './why-we-exist'
import Stories from './stories'
import Press from './press'
import SaveContact from './save-contact'
import { Element as ScrollElement } from 'react-scroll'

class LandingPage extends Component {
  render () {
    const { innerPageContentPadding, route } = this.props
    const { content } = route
    const lowerPageHeight = `calc(100vh - ${innerPageContentPadding})`

    return (
      <div className='landing-page'>
        <Call content={content.call} height={lowerPageHeight} headerPadding={innerPageContentPadding} />
        <Press content={content.press} />
        <ScrollElement name='summary'>
          <Summary content={content.summary} />
        </ScrollElement>
        <LovedOnes content={content.lovedOnes} />
        <Lawyer content={content.lawyer} />
        <Partners content={content.partners} />
        <WhyWeExist content={content.whyWeExist} />
        <Stories content={content.stories} height={lowerPageHeight} />
        <SaveContact content={content.saveContact} />
      </div>
    )
  }
}

LandingPage.propTypes = {
  innerPageContentPadding: string,
  route: object
}

export default LandingPage
