import React from 'react'
import { bool, func, number, object, string } from 'prop-types'
import range from 'lodash.range'
import { Button, Carousel } from '../index'
import Metrics from './metrics'

const AboutPage = ({ content, metrics, rightsIndex, rightsClass, carouselHeight, metricsShown, showMetrics }) => {
  const Slides = range(1, 6).map(n => (
    <div
      key={`com-img-${n}`}
      className='com-img'
      style={{ 'backgroundImage': `url('./assets/imgs/com-${n}.jpg')`, 'height': carouselHeight }}
    />
  ))

  return (
    <div className='about-page'>
      <div className='banner'>
        <div className={`banner-header ${rightsClass}`}>
          {content.header.prefix} {content.header.rights[rightsIndex]}.
        </div>
      </div>

      <div className='mission'>
        <div className='content h2'>{content.ourMissionText}</div>
      </div>

      <div className='story panel'>
        <div className='content'>
          <div className='col-container'>
            <div className='h2'>{content.aboutUs.header}</div>
            <div className='story-text text p' dangerouslySetInnerHTML={{ __html: content.aboutUs.text }} />
          </div>

          <Metrics {...{ metricsShown, showMetrics, content, metrics }} />
        </div>
      </div>

      <div className='team'>
        <div className='content panel col-container'>
          <div className='h2'>{content.ourTeam.header}</div>
          <div className='text p'>{content.ourTeam.text}</div>
        </div>

        <img className='team-photo' src='/assets/imgs/team-photo-min.png' />
      </div>

      <div className='community panel'>
        <div className='content'>
          <div className='col-container'>
            <div className='h2'>{content.community.header}</div>
            <div className='p'>{content.community.text}</div>
          </div>
        </div>
      </div>

      <div>
        <Carousel id='com-imgs-carousel'>
          {Slides}
        </Carousel>
      </div>

      <div className='donate panel'>
        <div className='content'>
          <div className='col-container'>
            <div className='h2'>{content.donate.header}</div>
            <div>
              <div className='text p'>{content.donate.text}</div>
              <Button
                className='donate-btn'
                label={content.donate.cta}
                selector='inverse'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutPage.propTypes = {
  metrics: object,
  carouselHeight: string,
  rightsIndex: number,
  rightsClass: string,
  metricsShown: bool,
  showMetrics: func
}

export default AboutPage
