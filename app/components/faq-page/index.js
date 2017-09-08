import React, { Component } from 'react'
import { object } from 'prop-types'
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll'

class FaqPage extends Component {
  constructor () {
    super()
    this.state = { activeSectionId: 'about', scrollPos: window.scrollY }
    this.header = {}
  }

  componentDidMount () {
    let lastKnownScrollPos = 0
    let ticking = false
    window.addEventListener('scroll', e => {
      lastKnownScrollPos = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.setState({ scrollPos: lastKnownScrollPos })
          ticking = false
        })
      }
      ticking = true
    })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll')
  }

  render () {
    const { innerPageContentPadding, route } = this.props
    const { scrollPos } = this.state
    const { content } = route

    const tabs = [
      { name: 'About Good Call', sectionId: 'about' },
      { name: 'If your loved one has been arrested', sectionId: 'loved-ones' },
      { name: 'Knowing your rights', sectionId: 'rights' }
    ]

    const offset = this.header.offsetHeight + 240
    const tabsStyle = scrollPos >= offset ? { position: 'fixed', left: 0, right: 0, top: innerPageContentPadding } : {}

    return (
      <div className='faq-page'>
        <h1 className='h1' ref={el => { this.header = el }}>{content.header}</h1>

        <div className='tabs fixed' style={tabsStyle}>
          {tabs.map(({ name, sectionId }) => (
            <ScrollLink className='tab' activeClass='active-tab' key={sectionId} {...{ to: sectionId, duration: 500, smooth: true, offset: -parseInt(innerPageContentPadding) - 20 }}>
              <div>
                {name}
              </div>
            </ScrollLink>
          ))}
        </div>

        <ul className='sections'>
          {content.sections.map(({ id, header, faqs }) => (
            <ScrollElement name={id} key={id}>
              <li className='section'>
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
            </ScrollElement>
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
