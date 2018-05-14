import React from 'react'
import { bool, func, number, object, string } from 'prop-types'
import range from 'lodash.range'
import { Button, Carousel } from '../index'
import Metrics from './metrics'
import { trackDonationEvent } from '../../services/ga'

const bios = [{
  name: 'Gabriel Leader-Rose',
  imgSrc: 'gabe.png',
  title: 'Co-Executive Director',
  bio: 'Gabe Leader-Rose has a background in product management and a passion for using technology to support communities of color and fight against oppressive systems. Prior to founding Good Call, Gabe managed physical and digital products at a 3D printing tech startup in NYC. Seeking to apply his knowledge of technology and systems to issues facing marginalized communities, Gabe joined the Blue Ridge Labs Fellowship in 2016, where he met his Good Call cofounders. Gabe has volunteered as a math teacher at public schools in Boston and New Orleans, and holds a degree in Engineering Physics from Tulane University. Outside of his work at Good Call, Gabe is an upright bassist, composer, and music producer.'
}, {
  name: 'Jelani Anglin',
  imgSrc: 'jelani.png',
  title: 'Co-Executive Director',
  bio: 'Jelani is a community organizer and serial entrepreneur. During High School, Jelani started his first online business, for which he was awarded the NYS FBLA Business Plan of the Year award, and was featured on national TV.  Prior to founding Good Call, Jelani worked on a variety of issue-based and electoral campaigns. Growing up in Far Rockaway, NY, and organizing in low-income communities across the east coast, Jelani experienced firsthand the pitfalls that exist for those oppressed by the criminal justice system. He works every day to better communities similar to where he grew up, and hopes his work will be a stepping stone for other young black males.'
}, {
  name: 'Eugene Lynch',
  imgSrc: 'eugene.png',
  title: 'Software Engineer',
  bio: 'Eugene is a software engineer with experience working in education, immigration, space exploration, and finance. Along with his work on Good Call, he volunteers with <a href="http://www.thebronxfreedomfund.org/dollarbailbrigade/" class="link">Dollar Bail Brigade</a>, <a href="https://www.courtwatchnyc.org/" class="link">Court Watch NYC</a>, and <a href="http://paroleprepny.org/" class="link">The Parole Preparation Project</a>. He is a graduate of UC Berkeley\'s College of Chemistry.'
}, {
  name: 'Stephanie Yim',
  imgSrc: 'steph.png',
  title: 'Designer',
  bio: 'Stephanie is a UX/UI designer passionate about using design to further social good and challenge expectations. She has experience designing in legal tech, social justice, fintech, and sharing economies. She is a native New Yorker and graduate of Carnegie Mellon University.'
}]

function toDonatePage () {
  trackDonationEvent()
  window.location.href = 'https://creativevisions.networkforgood.com/projects/31964-creative-visions-fiscal-sponsorship-good-call'
}

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
                  <div className='bottom' dangerouslySetInnerHTML={{ __html: bio }} />
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
                onClick= {toDonatePage}
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
