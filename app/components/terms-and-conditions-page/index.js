import React, {Component, PropTypes} from 'react'

class TermsAndConditionsPage extends Component {
  render () {
    const {content} = this.props.route

    return (
      <div className='legal-container'>
        <h1 className='legal-header'>{content.header}</h1>
        <p className='legal-effective-date'>{content.effectiveDate}</p>

        <p className='legal-paragraph'>
          {content.paragraph1Line1}<br />
          {content.paragraph1Line2}<br />
          {content.paragraph1Line3}
        </p>

        <h2 className='legal-subheader'>{content.subheader1}</h2>
        <p className='legal-paragraph'>{content.paragraph2Line1}</p>
      </div>
    )
  }
}

TermsAndConditionsPage.propTypes = {
  route: PropTypes.object
}

export default TermsAndConditionsPage
