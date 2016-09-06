import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Scroll from 'react-scroll'
const {Link} = Scroll

class Intro extends Component {
  render () {
    return (
      <div className="landing-page__intro">
        <img className="landing-page__phone-img" src="./assets/imgs/phone_img.svg" />
        <img className="landing-page__handcuffs-img" src="./assets/imgs/handcuffs_img.svg" />

        <h1 className="landing-page__intro-header">[product definition of GC]</h1>

        <p className="landing-page__intro-text">
          No one expects to be arrested, but if you’re at the wrong place, at the wrong time, just call 1-800-GOOD CALL
        </p>

        <RaisedButton
          className="landing-page__std-btn"
          label="sign up"
          backgroundColor="#40B097"
          labelColor="#FFFFFF"
        />

        <Link to="how-it-works" duration={500} smooth={true} offset={-64}>
          <img className="landing-page__scroll-icon" src="./assets/imgs/scroll_progress_indicator.svg" />
        </Link>

        <div className="landing-page__intro-see-how-it-works-txt">
          See how it works
        </div>
      </div>
    )
  }
}

export default Intro
