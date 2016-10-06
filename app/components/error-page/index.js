import React, {Component, PropTypes} from 'react'
import Intro from './../intro'

class ErrorPage extends Component {
  render () {
    const {content} = this.props.route

    return (
      <div className='error-page'>
        <Intro heading='404' subheading={content.subheader} />
      </div>
    )
  }
}

ErrorPage.propTypes = {
  route: PropTypes.object
}

export default ErrorPage
