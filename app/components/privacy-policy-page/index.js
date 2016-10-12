import React, {Component} from 'react'

class PrivacyPolicyPage extends Component {
  render () {
    const {content} = this.props.route

    return (
      <div className="privacy-policy-page">
        <h1 className="privacy-policy-page__header">{content.header}</h1>
        <p className="privacy-policy-page__effective-date">{content.effectiveDate}</p>

        <p className="privacy-policy-page__paragraph">
          {content.paragraph1Line1}<br />
          {content.paragraph1Line2}
        </p>

        <h2 className="privacy-policy-page__subheader">{content.subheader1}</h2>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph2Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph2Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph3Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph3Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph4Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph4Text}</p>

        <h2 className="privacy-policy-page__subheader">{content.subheader2}</h2>

        <p className="privacy-policy-page__paragraph">
          {content.paragraph5Line1}<br />
          <br />
          {content.paragraph5Line2}<br />
          {content.paragraph5Line3}<br />
          {content.paragraph5Line4}<br />
          {content.paragraph5Line5}<br />
          {content.paragraph5Line6}<br />
          {content.paragraph5Line7}<br />
          <br />
          {content.paragraph5Line8}<br />
          {content.paragraph5Line9}<br />
        </p>

        <h2 className="privacy-policy-page__subheader">{content.subheader3}</h2>

        <p className="privacy-policy-page__paragraph">{content.paragraph6Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph7Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph7Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph8Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph8Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph9Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph9Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph10Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph10Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph11Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph11Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph12Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph12Text}</p>

        <h2 className="privacy-policy-page__subheader">{content.subheader4}</h2>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph13Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph13Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph14Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph14Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph15Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph15Text}</p>

        <h3 className="privacy-policy-page__paragraph-subheader">{content.paragraph16Header}</h3>
        <p className="privacy-policy-page__paragraph">{content.paragraph16Text}</p>

        <h2 className="privacy-policy-page__subheader">{content.subheader5}</h2>

        <p className="privacy-policy-page__paragraph">{content.paragraph17Text}</p>

        <h2 className="privacy-policy-page__subheader">{content.subheader6}</h2>

        <p className="privacy-policy-page__paragraph">
          {content.paragraph18Line1}<br />
          {content.paragraph18Line2}<br />
          {content.paragraph18Line3}<br />
        </p>

        <h2 className="privacy-policy-page__subheader">{content.subheader7}</h2>

        <p className="privacy-policy-page__paragraph">{content.paragraph19Text}</p>

        <h2 className="privacy-policy-page__subheader">{content.subheader8}</h2>

        <p className="privacy-policy-page__paragraph">{content.paragraph20Text}</p>

        <h2 className="privacy-policy-page__subheader">{content.subheader9}</h2>

        <p className="privacy-policy-page__paragraph">{content.paragraph21Text}</p>
      </div>
    )
  }
}

export default PrivacyPolicyPage
