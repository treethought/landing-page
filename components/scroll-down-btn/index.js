import React, { Component } from 'react'
import Scroll from 'react-scroll'
const {Link} = Scroll

class ScrollDownBtn extends Component {
  render () {
    return (
      <Link className="scroll-down-btn" to={this.props.to} duration={500} smooth={true} offset={-64}>
        <img className="scroll-down-btn__icon" src="./assets/imgs/scroll_progress_indicator.svg" />

        <div className="scroll-down-btn__text">
          {this.props.text}
        </div>
      </Link>
    )
  }
}

export default ScrollDownBtn
