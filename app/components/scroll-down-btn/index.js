import React, { Component, PropTypes } from 'react'
import Scroll from 'react-scroll'
const { Link } = Scroll

class ScrollDownBtn extends Component {
  render () {
    const { to, text } = this.props
    return (
      <Link className='scroll-down-btn' {...{to, duration: 500, smooth: true, offset: -99}}>
        <img className='scroll-down-btn__icon' src='/assets/imgs/scroll_progress_indicator.svg' />

        <div className='scroll-down-btn__text'>
          <em>{text}</em>
        </div>
      </Link>
    )
  }
}

const { string } = PropTypes

ScrollDownBtn.propTypes = {
  to: string,
  text: string
}

export default ScrollDownBtn
