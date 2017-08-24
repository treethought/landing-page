import React from 'react'
import { string } from 'prop-types'
import { Button } from '../../index'
import { Link as ScrollLink } from 'react-scroll'
import Keypad from './keypad'

const Call = ({ height, headerPadding }) => (
  <div className='call' style={{ 'height': height }}>
    <div className='content'>
      <div className='left'>
        <div className='h1'>
          Who would you call in case of an arrest?
        </div>
        <div className='p'>
          We got your back, sign up to save an emergency contact to alert in case of an arrest and list yourself as an emergency contact for someone you want to be there for
        </div>
        <Button label='save a contact' selector='primary' />
      </div>
      <div className='right'>
        <Keypad />
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
