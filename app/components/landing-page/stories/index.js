import React, { Component } from 'react'
import { string, object } from 'prop-types'
import Slider from 'react-slick'
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import MediaQuery from 'react-responsive'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'
import ScrollDownBtn from './../../scroll-down-btn'
import { trackDonationEvent } from '../../../services/ga'
import './index.scss'

class Stories extends Component {
  constructor (props) {
    super(props)
  }

  prevSlide () {
    this.refs['landing-page__stories-carousel'].slickPrev()
  }

  nextSlide () {
    this.refs['landing-page__stories-carousel'].slickNext()
  }

  isMobile () {
    return window.innerWidth < 420
  }

  goToDonationPage () {
    trackDonationEvent()
    window.location.href = 'https://igg.me/at/C42BDfXWM58'
  }

  render () {
    const { content, height } = this.props

    const stories = content.stories.map((story) => (
      { pictureName: `${story.name}-min`, subheader: story.subheader, text: story.text, header: story.header }
    ))

    const sliderSettings = {
      className: 'landing-page__stories-carousel',
      autoplay: true,
      arrows: false,
      autoplaySpeed: 15000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      pauseOnHover: false
    }

    return (
      <section className='landing-page__stories' style={{ height }}>
        <h1 className='landing-page__stories-header'>{content.header}</h1>

        <ul className='landing-page__stories-carousel-list-container'>
          <div
            className='landing-page__stories-carousel__arrow-container landing-page__stories-carousel__left-arrow-container'
            onClick={this.prevSlide.bind(this)}
          >
            <KeyboardArrowLeft className='landing-page__stories-carousel__arrow' color='#FDFFF9' />
          </div>

          <Slider {...sliderSettings} ref='landing-page__stories-carousel'>
            <div
              className='landing-page__donation-panel-container'
              style={{
                'backgroundImage': `url('./assets/imgs/${'donation-bg-min' + (this.isMobile() ? '-mobile' : '')}.png')`
              }}
            >
              <h2 className='landing-page__stories-donation-header'>
                {content.donation.header}
              </h2>
              <FlatButton
                label={content.donation.cta}
                className='gc-std-btn landing-page__stories-donation-btn'
                onClick={this.goToDonationPage}
              />
              <a href='https://docs.google.com/forms/d/e/1FAIpQLScZoMlsT7GwU6LeBgJDhjYXH9fMozptEyyojWH_LMZAGv6iFw/viewform' className='landing-page__stories-newsletter-link'>
                {content.donation.newsletter}
              </a>
            </div>

            {stories.map(story => (
              <div className='landing-page__story-container' key={JSON.stringify(story)} style={{
                'backgroundImage': `url('./assets/imgs/${story.pictureName + (this.isMobile() ? '-mobile' : '')}.jpg')`
              }}>
                <div className='landing-page__story-container-overlay'>
                  <li className='landing-page__story'>
                    <h2 className='landing-page__story-header'>
                      <mark>{story.header}</mark>
                    </h2>

                    <div className='landing-page__story-text-container'>
                      <h3 className='landing-page__story-subheader'>
                        <span className='landing-page__story-text-quote'>“</span>
                        <span className='landing-page__story-subheader-text'><b>{story.subheader}</b></span>
                        <span className='landing-page__story-text-quote'>”</span>
                      </h3>

                      <p className='landing-page__story-text'>{story.text}</p>
                    </div>

                    <MediaQuery query='(max-width: 849px)'>
                      <div className='landing-page__stories-sign-up-btn-container'>
                        <FlatButton
                          label={content.signUpBtnLabel}
                          className='gc-std-btn'
                          style={{ backgroundColor: '#40B097' }}
                          containerElement={<Link to='/sign-up' />}
                        />
                      </div>
                    </MediaQuery>
                  </li>
                </div>
              </div>
            ))}
          </Slider>

          <div
            className='landing-page__stories-carousel__arrow-container landing-page__stories-carousel__right-arrow-container'
            onClick={this.nextSlide.bind(this)}
          >
            <KeyboardArrowRight className='landing-page__stories-carousel__arrow' color='#FDFFF9' />
          </div>
        </ul>

        <MediaQuery query='(min-width: 850px)'>
          <div className='landing-page__stories-scroll-down-btn-container'>
            <ScrollDownBtn to='landing-page__summary' text={content.scrollDownBtnLabel} />
          </div>
        </MediaQuery>
      </section>
    )
  }
}

Stories.propTypes = {
  content: object,
  height: string
}

export default Stories
