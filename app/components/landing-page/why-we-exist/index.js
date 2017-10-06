import React from 'react'

const WhyWeExist = ({ content }) =>
  <div className='why-we-exist'>
    <div className='p'>{content.header}</div>
    <p className='h2'>{content.text}</p>
  </div>

export default WhyWeExist
