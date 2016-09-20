import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router'
import ScrollDownBtn from './../../scroll-down-btn'
import Slider from 'react-slick'
import uuid from 'node-uuid'
import MediaQuery from 'react-responsive'
import getDistanceFromTop from './../../../services/get-distance-from-top'
import shuffle from 'lodash.shuffle'
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

class Stories extends Component {
  constructor () {
    super()
    this.resetComponentKey = this.resetComponentKey.bind(this)
    this.state = {
      componentKey: uuid.v4(),
      stories: [
        {pictureName: 'pharaoh-min', subheader: 'because I was defending myself', text: 'When Pharaoh was attacked by two tenants in his Brooklyn home, he tried his best to defend himself. Battered and bruised, he was still arrested when the police showed up.'},
        {pictureName: 'nate-min', subheader: 'because the officer said it was protocol', text: 'Nate was arrested for the possession of marijuana. Although this low level offense is usually resolved with a simple ticket, the officer decided to arrest Nate because he believed it was “protocol.'},
        {pictureName: 'sharmene-min', subheader: 'out of nowhere', text: 'When an altercation from months before turned into a warrant without her knowledge, Shermene was arrested unexpectedly.'},
        {pictureName: 'ray-min', subheader: 'because I fit the description', text: 'In Ray’s neighborhood in Brooklyn, “fitting the description” is a common offense. One night, Ray looked out of his doorway because of a disturbance, and quickly went from a concerned resident to a suspect.'},
        {pictureName: 'steven-min', subheader: 'because of a predatory policy', text: 'Thousands of people every year are stopped, frisked, and arrested. Steven happened to be one of them.'}
      ]
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
      className:'landing-page__stories-carousel',
      autoplay: true,
      // lazyLoad: true,
      arrows: false,
      autoplaySpeed: 15000,
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
            {shuffle(this.state.stories).map((story, i) => (
              <div className="landing-page__story-container" key={i} style={{
                'backgroundImage': `url('./assets/imgs/${story.pictureName + (this.isMobile() ? '-mobile' : '')}.jpg')`
              }}>
                <div className="landing-page__story-container-overlay">
                  <li className="landing-page__story">
                    <h2 className="landing-page__story-header">
                      <mark>I was arrested.</mark>
                    </h2>

                    <div className="landing-page__story-text-container">
                      <h3 className="landing-page__story-subheader">
                        <span className="landing-page__story-text-quote">“</span>
                        <span className="landing-page__story-subheader-text">{story.subheader}</span>
                        <span className="landing-page__story-text-quote">”</span>
                      </h3>

                      <p className="landing-page__story-text">{story.text}</p>
                    </div>
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
