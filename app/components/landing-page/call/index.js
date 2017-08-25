import React from 'react'
import { string } from 'prop-types'
import { Button } from '../../index'
import { Link as ScrollLink } from 'react-scroll'
import Keypad from './keypad'

const Call = ({ height, headerPadding, content }) => (
  <div className='call' style={{ 'height': height }}>
    <div className='content'>
      <div className='left'>
        <div className='h1'>{content.header}</div>
        <div className='p'>{content.text}</div>
        <Button label={content.cta} selector='primary' />
      </div>
      <div className='right'>
        <Keypad label={content.keypadLabel} />
      </div>
    </div>

    <div className='arrow-container'>
      <ScrollLink {...{ to: 'summary', duration: 500, smooth: true, offset: -parseInt(headerPadding) }}>
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
