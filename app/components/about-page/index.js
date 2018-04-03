import React from 'react'
import { bool, func, number, object, string } from 'prop-types'
import range from 'lodash.range'
import { Button, Carousel } from '../index'
import Metrics from './metrics'

const bios = [{
  name: 'Gabriel Leader-Rose',
  imgSrc: 'gabe.png',
  title: 'Co-Executive Director',
  bio: 'Prior to starting Good Call, Gabe worked in product management at a variety of startups in Boston and NYC. He has experience assistant teaching at public schools in Boston and New Orleans, and holds a B.S. in Engineering Physics from Tulane University.'
}, {
  name: 'Jelani Anglin',
  imgSrc: 'jelani.png',
  title: 'Co-Executive Director',
  bio: 'Jelani Anglin, a Queens native, has always been known to be a people person. His experiences over the years led him to the community-organizing field. He has organized on several campaigns (Airbnb, AFLCIO and Kathleen Rice, and more). When not at Good Call, he enjoys making music.'
}, {
  name: 'Eugene Lynch',
  imgSrc: 'eugene.png',
  title: 'Software Engineer',
  bio: 'Eugene is a software engineer with experience working in education, immigration, space exploration, and finance. Along with his work on Good Call, he volunteers with a number of organizations addressing injustice in NYC\'s criminal justice system. He is a graduate of UC Berkeley\'s College of Chemistry.'
}, {
  name: 'Stephanie Yim',
  imgSrc: 'steph.png',
  title: 'Designer',
  bio: 'Stephanie is a UX/UI designer passionate about using design to further social good and challenge expectations. She has experience designing in legal tech, social justice, fintech, and sharing economies. She is a native New Yorker and graduate of Carnegie Mellon University.'
}]

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

      <div className='team panel'>
        <div className='content'>
          <div className='col-container'>
            <div className='h2'>{content.ourTeam.header}</div>
            <div className='text p'>{content.ourTeam.text}</div>
          </div>

          <div className='bios'>
            {bios.map(({ name, imgSrc, title, bio }) => (
              <div className='bio-container' key={name}>
                <div className='bio'>
                  <div className='top'>
                    <img src={`/assets/imgs/${imgSrc}`} className='bio-img' />
                    <div className='headers'>
                      <div className='name'>{name}</div>
                      <div className='title'>{title}</div>
                    </div>
                  </div>
                  <div className='bottom'>
                    {bio}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
