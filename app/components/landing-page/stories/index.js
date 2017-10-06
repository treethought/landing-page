import React from 'react'
import { Carousel } from '../../index'

const Stories = ({ content, height }) => {
  // TODO: handle in an idiomatic way
  const isMobile = () => window.innerWidth < 420

  const stories = content.stories.map((story) => (
    { pictureName: `${story.name}-min`, subheader: story.subheader, header: story.header }
  ))

  return (
    <section className='stories'>
      <Carousel id='stories-carousel'>
        {stories.map(({ pictureName, header, subheader }) => (
          <div key={pictureName} className='story' style={{
            'backgroundImage': `url('./assets/imgs/${pictureName + (isMobile() ? '-mobile' : '')}.jpg')`,
            'height': height
          }}>
            <div className='content'>
              <div className='story-header'>{header}</div>
              <div className='story-subheader'>“{subheader}”</div>
            </div>
            <div className='overlay' />
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default Stories
