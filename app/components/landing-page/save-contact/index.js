import React from 'react'
import { Button } from '../../index'

const SaveContact = ({ content }) =>
  <div className='save-contact'>
    <div className='h2'>{content.text}</div>
    <Button selector='inverse' label={content.cta} />
  </div>

export default SaveContact
