import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router'
import ScrollDownBtn from './../../scroll-down-btn'
import Slider from 'react-slick'
import uuid from 'node-uuid'
import {findDOMNode} from 'react-dom'
import MediaQuery from 'react-responsive'
import getDistanceFromTop from './../../../services/get-distance-from-top'
import shuffle from 'lodash.shuffle'
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

const stories = [
  {pictureSrc: './assets/imgs/pharaoh-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because I was defending myself.', nameAndLocation: 'Pharaoh, Brooklyn, NY'},
  {pictureSrc: './assets/imgs/nate-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because the officer said it was protocol.', nameAndLocation: 'Nate, Brooklyn, NY'},
  {pictureSrc: './assets/imgs/sharmene-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because I was misunderstood.', nameAndLocation: 'Sharmene, Brooklyn, NY'},
  {pictureSrc: './assets/imgs/tina-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because I wanted my voice to be heard.', nameAndLocation: 'Tina, Brooklyn, NY'},
  // {pictureSrc: './assets/imgs/ray-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because I fit the description.', nameAndLocation: 'Ray, Brooklyn, NY'},
  {pictureSrc: './assets/imgs/steven-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because ______.', nameAndLocation: 'Steven, Brooklyn, NY'}
]

const minHeight = 290

class Stories extends Component {
  constructor () {
    super()
    this.resetComponentKey = this.resetComponentKey.bind(this)
    this.state = {componentKey: uuid.v4()}
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

  render () {
    let sliderSettings = {
      className:'landing-page__stories-carousel',
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      pauseOnHover: false
    }

    return (
      <section className="landing-page__stories" key={this.state.componentKey}>
        <h1 className="landing-page__stories-header">No one expects to get arrested.</h1>

        <ul className="landing-page__stories-carousel-list-container">
          <div
            className="landing-page__stories-carousel__arrow-container landing-page__stories-carousel__left-arrow-container"
            onClick={this.prevSlide.bind(this)}
          >
            <KeyboardArrowLeft className="landing-page__stories-carousel__arrow" color="#FDFFF9" />
          </div>

          <Slider {...sliderSettings} ref="landing-page__stories-carousel">
            {shuffle(stories).map((story, i) => (
              <div className="landing-page__story-container" key={i} style={{'backgroundImage': `url('${story.pictureSrc}')`}}>
                <div className="landing-page__story-container-overlay">
                  <li className="landing-page__story">
                    <h2 className="landing-page__story-header">
                      <em dangerouslySetInnerHTML={{__html: story.headerHTML}}></em>
                    </h2>

                    <p className="landing-page__story-text">
                      <span className="landing-page__story-text-quote landing-page__story-text-left-quote">“</span>
                      {story.text}
                      <span className="landing-page__story-text-quote landing-page__story-text-right-quote">”</span>
                      <span className="landing-page__story-name-and-location"><em>- {story.nameAndLocation}</em></span>
                    </p>
                  </li>
                </div>
              </div>
            ))}
          </Slider>

          <div
            className="landing-page__stories-carousel__arrow-container landing-page__stories-carousel__right-arrow-container"
            onClick={this.nextSlide.bind(this)}
          >
            <KeyboardArrowRight className="landing-page__stories-carousel__arrow" color="#FDFFF9" />
          </div>
        </ul>

        <div className="landing-page__stories-scroll-down-btn-container">
          <ScrollDownBtn to="landing-page__problem" text="Learn more"/>
        </div>
      </section>
    )
  }
}

export default Stories
