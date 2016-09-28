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
  constructor (props) {
    super(props)
    this.resetComponentKey = this.resetComponentKey.bind(this)
    let {content} = props
    this.state = {
      componentKey: uuid.v4(),
      stories: [
        {pictureName: 'pharaoh-min', subheader: content.pharoah.subheader, text: content.pharoah.text},
        {pictureName: 'nate-min', subheader: content.nate.subheader, text: content.nate.text},
        {pictureName: 'sharmene-min', subheader: content.sharmene.subheader, text: content.sharmene.text},
        {pictureName: 'ray-min', subheader: content.ray.subheader, text: content.ray.text},
        {pictureName: 'steven-min', subheader: content.steven.subheader, text: content.steven.text},
        {pictureName: 'tina-min', subheader: content.tina.subheader, text: content.tina.text}
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
      <section className="landing-page__stories" key={this.state.componentKey}>
        <h1 className="landing-page__stories-header">{content.header}</h1>

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
                      <mark>{content.storyHeader}</mark>
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
          <ScrollDownBtn to="landing-page__problem" text={content.scrollDownBtnLabel} />
        </div>
      </section>
    )
  }
}

export default Stories
