import React, { Component, PropTypes } from 'react'
import Slider from 'react-slick-data-doge-fork'
import uuid from 'node-uuid'
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import rotate from 'rotate-array'
import moment from 'moment'
import MediaQuery from 'react-responsive'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'

class Stories extends Component {
  constructor (props) {
    super(props)
    this.resetComponentKey = this.resetComponentKey.bind(this)
    const stories = props.content.stories.map((story) => (
      { pictureName: `${story.name}-min`, subheader: story.subheader, text: story.text, header: story.header }
    ))

    this.state = {
      componentKey: uuid.v4(),
      stories: rotate(stories, moment().get('minute') % stories.length)
    }
  }

  componentWillReceiveProps () {
    // necessary to rerender carousel correctly on route change
    this.resetComponentKey()
  }

  componentDidMount () {
    this.resetComponentKey()
    window.addEventListener('resize', this.resetComponentKey)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resetComponentKey)
  }

  resetComponentKey () {
    // this causes the component to remount, which is needed for <Slider /> to actually be responsive
    this.setState({componentKey: uuid.v4()})
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

  render () {
    let sliderSettings = {
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

    const {content} = this.props

    return (
      <section className='landing-page__stories' key={this.state.componentKey}>
        <h1 className='landing-page__stories-header'>{content.header}</h1>

        <ul className='landing-page__stories-carousel-list-container'>
          <div
            className='landing-page__stories-carousel__arrow-container landing-page__stories-carousel__left-arrow-container'
            onClick={this.prevSlide.bind(this)}
          >
            <KeyboardArrowLeft className='landing-page__stories-carousel__arrow' color='#FDFFF9' />
          </div>

          <Slider {...sliderSettings} ref='landing-page__stories-carousel'>
            {this.state.stories.map((story, i) => (
              <div className='landing-page__story-container' key={i} style={{
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
                        <span className='landing-page__story-subheader-text'>{story.subheader}</span>
                        <span className='landing-page__story-text-quote'>”</span>
                      </h3>

                      <p className='landing-page__story-text'>{story.text}</p>
                    </div>
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

        <MediaQuery query='(max-width: 849px)'>
          <div className='landing-page__stories-sign-up-btn-container'>
            <FlatButton
              label={content.signUpBtnLabel}
              className='gc-std-btn'
              containerElement={<Link to='/sign-up' />}
            />
          </div>
        </MediaQuery>
      </section>
    )
  }
}

Stories.propTypes = {
  content: PropTypes.object
}

export default Stories
