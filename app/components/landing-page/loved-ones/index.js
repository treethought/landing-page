import React from 'react'

const LovedOnes = ({ content }) =>
  <div className='loved-ones'>
    <div className='content-container'>
      <div className='h2'>{content.header}</div>
      <p className='p'>{content.text}</p>
    </div>
    <img className='icon' src='/assets/imgs/contact-loved-ones.png' />
  </div>

export default LovedOnes
