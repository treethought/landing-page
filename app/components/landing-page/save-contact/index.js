import React from 'react'
import { Button } from '../../index'

const SaveContact = ({ content }) =>
  <div className='save-contact'>
    <div className='h2'>Save an emergency contact to protect yourself and the rights of your loved ones</div>
    <Button selector='inverse' label='Save a contact' />
  </div>

export default SaveContact
