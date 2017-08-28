import React from 'react'
import { object } from 'prop-types'
import { Button } from '../index'

const AboutPage = ({ route }) => {
  const { content } = route

  // TODO: api call
  const metrics = [
    { type: 'calls', number: '300+' },
    { type: 'lsps', number: '2' },
    { type: 'time', number: '46s' }
  ]

  return (
    <div className='about-page'>
      <div className='banner'>
        <div className='banner-header'>{content.header}</div>
      </div>

      <div className='mission'>
        <div className='content h2'>{content.ourMissionText}</div>
      </div>

      <div className='story panel'>
        <div className='content'>
          <div className='h2'>{content.aboutUs.header}</div>
          <div className='story-text text' dangerouslySetInnerHTML={{ __html: content.aboutUs.text }} />

          <img className='story-icon' src='/assets/imgs/coil.svg' />

          <div className='metrics-subheader'>{content.metrics.header}</div>
          <div className='metrics-container'>
            {metrics.map(({ type, number }, i) => (
              <div className='metric' key={i}>
                <div className='number'>{number}</div>
                <div className='label'>{content.metrics.metrics[type]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='team'>
        <div className='content panel'>
          <div className='h2'>{content.ourTeam.header}</div>
          <div className='text'>{content.ourTeam.text}</div>
        </div>

        <img className='team-photo' src='/assets/imgs/team-photo-min.png' />
      </div>

      <div className='community panel'>
        <div className='content'>
          <div className='h2'>{content.community.header}</div>
          <div className='text'>{content.community.text}</div>
          <img className='photo' src='http://www.arenakettering.co.uk/wp-content/uploads/grey-square.png' />
        </div>
      </div>

      <div className='donate panel'>
        <div className='content'>
          <div className='h2'>{content.donate.header}</div>
          <div className='text'>{content.donate.text}</div>
          <Button
            className='donate-btn'
            label={content.donate.cta}
            selector='inverse'
          />
        </div>
      </div>
    </div>
  )
}

AboutPage.propTypes = {
  route: object
}

export default AboutPage
