import React from 'react'
import { object } from 'prop-types'
import { Button } from '../index'

const AboutPage = ({ route }) => {
  const { content } = route

  const metrics = [
    { label: 'Calls processed by Good Call', number: '300+' },
    { label: 'Major legal service providers providing legal support on our hotline', number: '2' },
    { label: 'Average time it takes for us to connect someone with a free lawyer', number: '46s' }
  ]

  return (
    <div className='about-page'>
      <div className='banner'>
        <div className='banner-header'>{content.header}</div>
      </div>

      <div className='mission'>
        <div className='mission-text h2'>{content.ourMissionText}</div>
      </div>

      <div className='story'>
        <div className='content'>
          <div className='h2'>{content.aboutUs.header}</div>
          <div className='story-text' dangerouslySetInnerHTML={{ __html: content.aboutUs.text }} />
          <img className='story-icon' src='/assets/imgs/coil.svg' />
        </div>
      </div>

      <div className='metrics'>
        <div className='content'>
          <div className='subheader'>Since October 2016</div>
          <div className='container'>
            {metrics.map(({ label, number }) => (
              <div className='metric' key={label}>
                <div className='number'>{number}</div>
                <div className='label'>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='team'>
        <div className='content'>
          <div className='h2'>{content.ourTeam.header}</div>
          <div className='text'>{content.ourTeam.text}</div>
          <img className='team-photo' src='/assets/imgs/team-photo-min.png' />
        </div>
      </div>

      <div className='community'>
        <div className='content'>
          <div className='h2'>{content.community.header}</div>
          <div className='text'>{content.community.text}</div>
          <img className='photo' src='http://www.arenakettering.co.uk/wp-content/uploads/grey-square.png' />
        </div>
      </div>

      <div className='donate'>
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
