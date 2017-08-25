import React from 'react'

const Lawyer = ({ content }) =>
  <div className='lawyer'>
    <div className='content-container'>
      <div className='h2'>{content.header}</div>
      <p className='p'>{content.text}</p>
    </div>
    <img className='icon' src='http://www.arenakettering.co.uk/wp-content/uploads/grey-square.png' />
  </div>

export default Lawyer
