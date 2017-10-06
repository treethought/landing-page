import React, { Component } from 'react'
import Slider from 'react-slick'

class Carousel extends Component {
  constructor () {
    super()
    this.prevSlide = this.prevSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }

  prevSlide () {
    this.refs[this.props.id].slickPrev()
  }

  nextSlide () {
    this.refs[this.props.id].slickNext()
  }

  render () {
    const { children, id } = this.props

    const sliderSettings = {
      className: id,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
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
        <Slider {...sliderSettings} ref={id}>
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
