import React, { Component } from 'react'

class Intro extends Component {
  render () {
    let subHeading;
    if(this.props.subheading) {
      subHeading = <h2 className="intro__subheader">{this.props.subheading}</h2>;
    }

    return (
      <div className="intro">
        <h1 className="intro__header">{this.props.heading}</h1>

        {subHeading}

        {this.props.children}
      </div>
    )
  }
}

export default Intro
