import React, { Component, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'
import './index.scss'

class LaunchingSoon extends Component {
  render () {
    const {content} = this.props

    return (
      <section className='landing-page__launching-soon'>
        <h2 className='landing-page__std-header landing-page__launching-soon-header'>{content.header}</h2>
        <h3 className='landing-page__std-subheader landing-page__launching-soon-subheader'><em>{content.subheader}</em></h3>

        <FlatButton
          label={content.signUpBtnLabel}
          style={{ backgroundColor: '#40B097' }}
          className='gc-std-btn'
          containerElement={<Link to='/sign-up' />}
        />
      </section>
    )
  }
}

LaunchingSoon.propTypes = {
  content: PropTypes.object
}

export default LaunchingSoon
