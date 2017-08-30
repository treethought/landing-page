import React from 'react'

const logos = ['brl.png', 'las.jpg', 'bxd.png']

const Partners = ({ content }) =>
  <div className='partners'>
    <div className='content'>
      <div className='h2'>{content.header}</div>
      <div className='logos-container'>
        {logos.map(logo => <img src={`/assets/imgs/${logo}`} data-fit='contain' />)}
      </div>
    </div>
  </div>

export default Partners
