import React from 'react'

const images = [
  { file: 'univision.png', href: 'http://www.univision.com/nueva-york/wxtv/noticias/arrestos/una-campana-orienta-a-familias-de-el-bronx-sobre-como-pedir-auxilio-si-detienen-a-su-hijo' },
  { file: 'pns.png', href: 'http://www.publicnewsservice.org/2017-07-26/criminal-justice/hotline-brings-help-to-nyers-after-arrest/a58695-1' },
  { file: 'nyt.svg', href: 'https://www.nytimes.com/2017/07/23/nyregion/bronx-hotline-helps-people-make-the-right-call-after-an-arrest.html' },
  { file: 'bronxnews12.png', href: 'http://bronx.news12.com/story/35713764/new-hotline-in-the-bronx-offers-legal-advice-for-criminal-offenders' },
  { file: 'bronxnet.jpg', href: 'http://www.bronxnet.org/tv/open/360-open-featured-interviews/9593-good-call-project-open-wednesday-june-21st-20172017-06-21-23-46-43' }
]

const Press = () =>
  <section className='press'>
    <div className='images'>
      {images.map((img, i) => (
        <a href={img.href} key={i}>
          <img src={`/assets/imgs/${img.file}`} className='image' data-fit='contain' />
        </a>
      ))}
    </div>
  </section>

export default Press
