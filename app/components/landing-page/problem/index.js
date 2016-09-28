import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Problem extends Component {
  render () {
    const {content} = this.props

    return (
      <section className="landing-page__problem">
        <h2 className="landing-page__std-header">{content.header}</h2>
        <h3 className="landing-page__std-subheader"><em>{content.subheader}</em></h3>

        <p className="landing-page__problem-text">
          {content.text}
        </p>
      </section>
    )
  }
}

export default Problem
