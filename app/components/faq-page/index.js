import React, { Component } from 'react'
import { object } from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'

class FaqPage extends Component {
  constructor () {
    super()
    this.state = { activeSectionId: 'about' }
  }

  render () {
    const { innerPageContentPadding, route } = this.props
    const { content } = route

    const tabs = [
      { name: 'About Good Call', sectionId: 'about' },
      { name: 'If your loved one has been arrested', sectionId: 'loved-ones' },
      { name: 'Knowing your rights', sectionId: 'rights' }
    ]

    return (
      <div className='faq-page'>
        <h1 className='h1'>{content.header}</h1>

        <div className='tabs'>
          {tabs.map(({ name, sectionId }) => (
            <ScrollLink key={sectionId} {...{ to: sectionId, duration: 500, smooth: true, offset: -parseInt(innerPageContentPadding) - 20 }}>
              <div className='tab'>
                {name}
              </div>
            </ScrollLink>
          ))}
        </div>

        <ul className='sections'>
          {content.sections.map(({ id, header, faqs }) => (
            <li className='section' key={id} id={id}>
              <h2 className='section-header'>{header}</h2>

              <ul className='section-faqs'>
                {faqs.map((faq, j) => (
                  <li className='faq' key={j}>
                    <h3 className='faq-question'>{faq.question}</h3>
                    <p className='faq-answer' dangerouslySetInnerHTML={{__html: faq.answer}} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

FaqPage.propTypes = {
  route: object
}

export default FaqPage
