import React, { Component } from 'react'
import Slider from 'react-slick'

class Carousel extends Component {
  constructor () {
    super()
    this.prevSlide = this.prevSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }

  prevSlide () {
    this.refs['carousel-slider'].slickPrev()
  }

  nextSlide () {
    this.refs['carousel-slider'].slickNext()
  }

  render () {
    const { children } = this.props

    const sliderSettings = {
      className: 'carousel-slider',
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
      <div className='carousel'>
        <Slider {...sliderSettings} ref='carousel-slider'>
          {children}
        </Slider>

        <div className='arrows'>
          <img src='/assets/imgs/arrow-left.svg' className='arrow' onClick={this.prevSlide} />
          <img src='/assets/imgs/arrow-right.svg' className='arrow' onClick={this.nextSlide} />
        </div>
      </div>
    )
  }
}

export default Carousel
