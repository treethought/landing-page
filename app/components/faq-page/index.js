import React, {Component} from 'react'
import InnerPage from '../inner-page'

class FaqPage extends Component {
  constructor () {
    super()
    this.state = {
      sections: [
        {header: 'About Good Call', faqs: [
          {question: 'Do I have to pay to sign up and use Good Call?', answer: 'No, Good Call is free to sign up and use!'},
          // {question: 'When should I call Good Call?', answer: 'Call our hotline if you or your loved one has been arrested in the Bronx. The earlier a lawyer is notified, the more time they will have to properly prepare your case.'},
          {question: 'Who can sign up for Good Call?', answer: 'Everyone! We believe everyone deserves fairness.'},
          {question: 'I don\'t think I would be arrested, why should I sign up?', answer: 'No one expects to get arrested and we definitely hope you wouldn\'t be. Unfortunately, today unncessary arrests are too common. Similar to providing emergency contacts and signing waivers, Good Call is there as a safety precaution in case something does happen. Moreover, we believe that everyone should have a just and fair court outcome, signing up will help support that mission.'},
          // {question: 'Where can I currently use Good Call?', answer: 'Our hotline is currently live in the Bronx.'},
          {question: 'Where can I currently use Good Call?', answer: 'Our hotline is not live yet, but will be launching soon in the Bronx.'},

          // {question: 'If I don\'t live in the Bronx, can I still sign up for Good Call?', answer: 'Yes! We are currently piloting in the Bronx and will be serving the other boroughs soon. Sign up and we will let you know when Good Call\'s hotline is available in your area.'},
          {question: 'If I don\'t live in the Bronx, can I still sign up for Good Call?', answer: 'Yes! We are piloting in the Bronx first and will be serving the other boroughs soon. Sign up and we will let you know when Good Call\'s hotline is available in your area.'},


          // {question: 'What is the Good Call hotline for the Bronx?', answer: '1 (347) 95 BRONX'},
          {question: 'Can I still call the hotline if I didn\'t sign up?', answer: 'Yes, we believe that everyone should get help when they are arrested. However, signing up will allow us to reach out to your emergency contact to let them know what\'s going on and to connect them with your lawyer which will help make your case stronger.'},
          {question: 'How does Good Call get me a free lawyer?', answer: 'Good Call partners with legal service providers around the city who serve the community. Our lawyers are committed to providing quality representation to our callers.'},
          {question: 'Will Good Call share my information with anyone?', answer: 'Good Call will only share your information with the lawyer that will represent you in the case that you get arrested. Good Call will never share your information with any one else that you have not given us the consent to.'}
        ]},
        // {header: 'If your loved one has been arrested - ', faqs: [
        //   {question: 'What should I do if my loved one is arrested?', answer: 'You can call our hotline (347) 95 BRONX and we will connect you with one of our lawyers to help you with your loved one\'s case.'},
        //   {question: 'Why did I get notified by Good Call?', answer: 'If you have been notified by Good Call that someone you know has been arrested, it is because that person has called our hotline and you were listed as their emergency contact.'},
        //   {question: 'What is Good Call?', answer: 'Good Call is a free hotline to help people who are arrested reach their loved ones and secure a free lawyer right away.'},
        //   {question: 'How can I learn more about my loved one\'s case?', answer: 'You can call our hotline (347) 95 BRONX to talk to one of our operators.'}
        // ]}
      ]
    }
  }

  render () {
    return (
      <InnerPage>
        <div className="faq-page">
          <h1 className="faq-page__header">Frequently Asked Questions</h1>

          <ul className="faq-page__sections">
            {this.state.sections.map((section, i) => (
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
      </InnerPage>
    )
  }
}

export default FaqPage
