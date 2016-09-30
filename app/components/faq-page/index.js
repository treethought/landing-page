import React, {Component} from 'react'

class FaqPage extends Component {
  render () {
    const {content} = this.props.route

    return (
      <div className="faq-page">
        <h1 className="faq-page__header">{content.header}</h1>

        <ul className="faq-page__sections">
          {content.sections.map((section, i) => (
            <li className="faq-page__section" key={i}>
              <h2 className="faq-page__section-header">{section.header}</h2>

              <ul className="faq-page__section-faqs">
                {section.faqs.map((faq, j) => (
                  <li className="faq-page__faq" key={j}>
                    <h3 className="faq-page__faq-question">{faq.question}</h3>

                    <p className="faq-page__faq-answer">{faq.answer}</p>
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

export default FaqPage
