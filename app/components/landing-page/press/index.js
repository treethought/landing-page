import React from 'react'
import { object } from 'prop-types'

const images = [
  { file: 'univision.png' },
  { file: 'pns.png' },
  { file: 'nyt.svg' },
  { file: 'bronxnews12.png' },
  { file: 'bronxnet.jpg' }
]

const Press = ({ content }) => (
  <section className='landing-page__press'>
    <h2 className='landing-page__std-header landing-page__press-header'>{content.header}</h2>
    <div className='landing-page__press-images'>
      {images.map((img, i) => (
        <img
          key={i}
          src={`/assets/imgs/${img.file}`}
          className='landing-page__press-image'
        />
      ))}
    </div>
  </section>
)

Press.propTypes = {
  content: object
}

export default Press
