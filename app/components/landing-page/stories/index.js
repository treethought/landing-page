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

const stories = [
  {pictureSrc: './assets/imgs/pharaoh-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because I was defending myself.', nameAndLocation: 'Pharaoh, Brooklyn, NY'},
  {pictureSrc: './assets/imgs/nate-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because the officer said it was protocol.', nameAndLocation: 'Nate, Brooklyn, NY'},
  {pictureSrc: './assets/imgs/sharmene-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because I was misunderstood.', nameAndLocation: 'Sharmene, Brooklyn, NY'},
  {pictureSrc: './assets/imgs/tina-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because I wanted my voice to be heard.', nameAndLocation: 'Tina, Brooklyn, NY'},
  // {pictureSrc: './assets/imgs/ray-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because I fit the description.', nameAndLocation: 'Ray, Brooklyn, NY'},
  {pictureSrc: './assets/imgs/jelani-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because ______.', nameAndLocation: 'Jelani, Brooklyn, NY'},
  {pictureSrc: './assets/imgs/steven-min.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because ______.', nameAndLocation: 'Steven, Brooklyn, NY'}
]

const minHeight = 290

class Stories extends Component {
  constructor () {
    super()
    this.state = {componentKey: uuid.v4()}
    this.adjustCarouselSize = this.adjustCarouselSize.bind(this)
  }

  componentWillReceiveProps () {
    // necessary to rerender carousel correctly on route change
    this.setState({componentKey: uuid.v4()})
  }

  componentDidMount () {
    this.adjustCarouselSize()
    window.addEventListener('resize', this.adjustCarouselSize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.adjustCarouselSize)
  }

  adjustCarouselSize () {
    // this causes the component to remount, which is needed for <Slider /> to actually be responsive
    let DOMNode = findDOMNode(this.refs['landing-page__stories-carousel'])
    let distanceFromTop = getDistanceFromTop(DOMNode)
    let height = window.innerHeight - distanceFromTop
    let adjustedHeight = height >= minHeight ? height : minHeight
    this.setState({componentKey: uuid.v4(), height: adjustedHeight})
  }

  render () {
    let sliderSettings = {
      className:'landing-page__stories-carousel',
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      pauseOnHover: false,
      adaptiveHeight: true
    }

    return (
      <section className="landing-page__stories" key={this.state.componentKey}>
        <h1 className="landing-page__stories-header">No one expects to get arrested.</h1>

        <ul>
          <Slider {...sliderSettings} ref="landing-page__stories-carousel">
            {shuffle(stories).map((story, i) => (
              <div className="landing-page__story-container" key={i} style={{'backgroundImage': `url('${story.pictureSrc}')`, 'height': this.state.height}}>
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
        </ul>

        <div className="landing-page__stories-scroll-down-btn-container">
          <ScrollDownBtn to="landing-page__problem" text="Learn more"/>
        </div>
      </section>
    )
  }
}

export default Stories
