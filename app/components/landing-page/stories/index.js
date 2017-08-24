import React, { Component } from 'react'
import Slider from 'react-slick'

class Stories extends Component {
  constructor () {
    super()
    this.prevSlide = this.prevSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }

  prevSlide () {
    this.refs['carousel'].slickPrev()
  }

  nextSlide () {
    this.refs['carousel'].slickNext()
  }

  // TODO: handle in an idiomatic way
  isMobile () {
    return window.innerWidth < 420
  }

  render () {
    const { content, height } = this.props

    const stories = content.stories.map((story) => (
      { pictureName: `${story.name}-min`, subheader: story.subheader, header: story.header }
    ))

    const sliderSettings = {
      className: 'carousel',
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      pauseOnHover: false,
      dots: true,
      dotsClass: 'dots',
      customPaging: i => <div className='dot' />
    }

    return (
      <section className='stories'>
        <Slider {...sliderSettings} ref='carousel'>
          {stories.map(({ pictureName, header, subheader }) => (
            <div key={pictureName} className='story' style={{
              'backgroundImage': `url('./assets/imgs/${pictureName + (this.isMobile() ? '-mobile' : '')}.jpg')`,
              'height': height
            }}>
              <div className='content'>
                <div className='story-header'>{header}</div>
                <div className='story-subheader'>“{subheader}”</div>
              </div>
              <div className='overlay' />
            </div>
          ))}
        </Slider>

        <div className='arrows'>
          <img src='/assets/imgs/arrow-left.svg' className='arrow' onClick={this.prevSlide} />
          <img src='/assets/imgs/arrow-right.svg' className='arrow' onClick={this.nextSlide} />
        </div>
      </section>
    )
  }
}

export default Stories
