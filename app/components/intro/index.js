import React, { Component } from 'react'
import renderIf from 'render-if'

class Intro extends Component {
  render () {
    return (
      <div className="intro">
        <h1 className="intro__header">{this.props.heading}</h1>

        {renderIf(this.props.subheading) (
          <h2 className="intro__subheader">{this.props.subheading}</h2>
        )}

        {this.props.children}
      </div>
    )
  }
}

export default Intro
