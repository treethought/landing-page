import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import ScrollDownBtn from './../../scroll-down-btn'
import Slider from 'react-slick'
import uuid from 'node-uuid'
import {findDOMNode} from 'react-dom'

const stories = [
  {pictureSrc: 'https://desu-usergeneratedcontent.xyz/a/image/1467/65/1467651370670.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because my license was suspended and I haven\'t had time to renew it time to renew it time to renew it time to renew it time to renew it', nameAndLocation: 'Stephanie, Queens, NY'},
  {pictureSrc: 'http://www.animeclick.it/immagini/anime/Bananya/gallery_original/Bananya-577d0ce7b4619.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because my license was suspended and I haven\'t had time to renew it', nameAndLocation: 'Stephanie, Queens, NY'},
  {pictureSrc: 'http://pbs.twimg.com/media/CrcvK6sWYAABCfT.jpg', headerHTML: 'I was <mark>arrested.</mark>', text: 'I was arrested because my license was my license was', nameAndLocation: 'Stephanie, Queens, NY'}
]

class Stories extends Component {
  componentWillMount () {
    this.setComponentKey()
  }

  componentDidMount () {
    this.adjustCarouselHeight()
    window.addEventListener('resize', this.setComponentKey.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setComponentKey.bind(this))
  }

  setComponentKey () {
    // this causes the component to remount, which is needed for <Slider /> to actually be responsive
    this.setState({componentKey: uuid.v4()})
  }

  adjustCarouselHeight () {
    let DOMNode = findDOMNode(this.refs['landing-page__stories-carousel'])
    let viewportOffset = DOMNode.getBoundingClientRect().top
    let height = window.innerHeight - viewportOffset
    this.setState({height: height})
  }

  render () {
    let sliderSettings = {
      className:'landing-page__stories-carousel',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      pauseOnHover: false,
      adaptiveHeight: true
    }

    return (
      <section className="landing-page__stories" key={this.state.componentKey}>
        <h1 className="landing-page__stories-header">No one expects to be arrested.</h1>

        <ul>
          <Slider {...sliderSettings} ref="landing-page__stories-carousel">
            {stories.map((story, i) => (
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
