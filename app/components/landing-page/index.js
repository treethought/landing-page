import React from 'react'
import { string, object } from 'prop-types'
import Petition from './petition'
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

const LandingPage = ({ innerPageContentPadding, route }) => {
  const { content } = route
  const lowerPageHeight = `calc(100vh - ${innerPageContentPadding})`

  return (
    <div className='landing-page'>
      <Call content={content.call} height={lowerPageHeight} headerPadding={innerPageContentPadding} />
      <ScrollElement name='press'>
        <Press />
      </ScrollElement>
      <Summary content={content.summary} />
      <Lawyer content={content.lawyer} />
      <LovedOnes content={content.lovedOnes} />
      <WhyWeExist content={content.whyWeExist} />
      <Partners content={content.partners} />
      <Stories content={content.stories} height={lowerPageHeight} />
      <SaveContact content={content.saveContact} />
    </div>
  )
}

LandingPage.propTypes = {
  innerPageContentPadding: string,
  route: object
}

export default LandingPage
