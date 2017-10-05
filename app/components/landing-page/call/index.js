import React from 'react'
import { string } from 'prop-types'
import { Button } from '../../index'
import { Link as ScrollLink } from 'react-scroll'
import Keypad from './keypad'

const Call = ({ height, headerPadding, content }) => (
  <div className='call' style={{ 'height': height }}>

    <video poster='/assets/videos/bw.jpg' className='video' playsInline autoPlay muted loop>
      <source src='/assets/videos/bw.mp4' type='video/mp4' />
    </video>

    <div className='content'>
      <div className='left'>
        <div className='h1'>{content.header}</div>
        <div className='p'>{content.text}</div>
        <Button label={content.cta} selector='primary' to='/sign-up' />
      </div>
      <div className='right'>
        <Keypad label={content.keypadLabel} />
      </div>
    </div>

    <div className='arrow-container'>
      <ScrollLink {...{ to: 'press', duration: 500, smooth: true, offset: -parseInt(headerPadding) }}>
        <img className='arrow' src='/assets/imgs/arrow-down.svg' />
      </ScrollLink>
    </div>

    <div className='overlay' />
  </div>
)

Call.propTypes = {
  height: string,
  headerPadding: string
}

export default Call
