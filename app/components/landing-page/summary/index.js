import React from 'react'

const Summary = ({ content }) =>
  <div className='summary'>
    <div className='content'>
      <div className='h2 text' dangerouslySetInnerHTML={{ __html: content.header }} />
      <img className='icon' src='/assets/imgs/coil.svg' />
    </div>
  </div>

export default Summary
