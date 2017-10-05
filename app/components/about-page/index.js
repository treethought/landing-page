import React from 'react'
import { number, object, string } from 'prop-types'
import CountUp from 'react-countup'
import range from 'lodash.range'
import { Button, Carousel } from '../index'

const AboutPage = ({ content, metrics, rightsIndex, carouselHeight }) => {
  const formattedMetrics = [
    { type: 'calls' },
    { type: 'lsps' },
    { type: 'time', suffix: 's' }
  ]

  return (
    <div className='about-page'>
      <div className='banner'>
        <div className='banner-header'>{content.header.prefix} {content.header.rights[rightsIndex]}.</div>
      </div>

      <div className='mission'>
        <div className='content h2'>{content.ourMissionText}</div>
      </div>

      <div className='story panel'>
        <div className='content'>
          <div className='col-container'>
            <div className='h2'>{content.aboutUs.header}</div>
            <div className='story-text text' dangerouslySetInnerHTML={{ __html: content.aboutUs.text }} />
          </div>

          <div className='metrics-subheader'>{content.aboutUs.metrics.header}</div>
          <div className='metrics-container'>
            {formattedMetrics.map(({ type, suffix }, i) => (
              <div className='metric' key={i}>
                <div className='number'>{metrics[type] ? <CountUp start={0} end={metrics[type]} /> : '--'}{suffix}</div>
                <div className='label'>{content.aboutUs.metrics.metrics[type]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='team'>
        <div className='content panel col-container'>
          <div className='h2'>{content.ourTeam.header}</div>
          <div className='text'>{content.ourTeam.text}</div>
        </div>

        <img className='team-photo' src='/assets/imgs/team-photo-min.png' />
      </div>

      <div className='community panel'>
        <div className='content'>
          <div className='col-container'>
            <div className='h2'>{content.community.header}</div>
            <div>{content.community.text}</div>
          </div>
        </div>
      </div>

      <div>
        <Carousel>
          {range(1, 6).map(n => (
            <div
              key={`com-img-${n}`}
              className='com-img'
              style={{ 'backgroundImage': `url('./assets/imgs/com-${n}.jpg')`, 'height': carouselHeight }}
            />
          ))}
        </Carousel>
      </div>

      <div className='donate panel'>
        <div className='content'>
          <div className='col-container'>
            <div className='h2'>{content.donate.header}</div>
            <div>
              <div className='text'>{content.donate.text}</div>
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
  rightsIndex: number
}

export default AboutPage
