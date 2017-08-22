import React from 'react'
import { string } from 'prop-types'
import { Button } from '../../index'

const Call = ({ height }) => (
  <div className='call' style={{ 'height': height }}>
    <div className='content'>
      <div className='h1'>
        Who would you call in case of an arrest?
      </div>
      <div className='p'>
        We got your back, sign up to save an emergency ontact to alert in case of an arrest and list yourself as an emergency contact for someone you want to be there for
      </div>
      <Button label='save a contact' selector='primary' />
    </div>

    <div className='overlay' />
  </div>
)

Call.propTypes = {
  height: string
}

export default Call
