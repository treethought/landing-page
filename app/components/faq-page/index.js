import React, { Component } from 'react'
import { object } from 'prop-types'
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll'

let scrollTicking = false

class FaqPage extends Component {
  constructor () {
    super()
    this.state = { activeSectionId: 'about', scrollPos: window.scrollY }
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll (e) {
    let lastKnownScrollPos = window.scrollY
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        this.setState({ scrollPos: lastKnownScrollPos })
        scrollTicking = false
      })
    }
    scrollTicking = true
  }

  render () {
    const { innerPageContentPadding, route } = this.props
    const { scrollPos } = this.state
    const { content } = route
    const tabsHeight = 100

    const tabs = [
      { name: 'About Good Call', sectionId: 'about' },
      { name: 'If your loved one has been arrested', sectionId: 'loved-ones' },
      { name: 'Knowing your rights', sectionId: 'rights' }
    ]

    const areTabsSticky = this.header && scrollPos >= (this.header.offsetHeight + parseInt(window.getComputedStyle(this.header).marginTop) * 2)
    const tabsStyle = Object.assign({ height: tabsHeight }, areTabsSticky ? { position: 'fixed', left: 0, right: 0, top: innerPageContentPadding } : {})
    const faqPageStyle = areTabsSticky ? { paddingTop: tabsHeight } : {}

    return (
      <div className='faq-page' style={faqPageStyle}>
        <h1 className='h1' ref={el => { this.header = el }}>{content.header}</h1>

        <div className='tabs fixed' style={tabsStyle}>
          {tabs.map(({ name, sectionId }) => (
            <ScrollLink
              key={sectionId}
              className='tab'
              {...{
                to: sectionId,
                duration: 500,
                smooth: true,
                offset: -parseInt(innerPageContentPadding) - 20 - tabsHeight
              }}
            >
              <div>{name}</div>
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
