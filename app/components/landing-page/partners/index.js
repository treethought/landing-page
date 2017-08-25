import React from 'react'

const Partners = ({ content }) =>
  <div className='partners'>
    <div className='content'>
      <div className='h2'>{content.header}</div>
      <div className='logos-container'>
        <img src='/assets/imgs/brl.png' />
        <img src='/assets/imgs/las.jpg' />
        <img src='/assets/imgs/bxd.png' />
      </div>
    </div>
  </div>

export default Partners
