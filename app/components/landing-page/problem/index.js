import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Problem extends Component {
  render () {
    return (
      <section className="landing-page__problem">
        <h2 className="landing-page__std-header">For most New Yorkers, there is nowhere to turn for help.</h2>
        <h3 className="landing-page__std-subheader"><em>Our mission</em></h3>

        <p className="landing-page__problem-text">
          {"If you don't have a private lawyer to call, which most of us don't, it is hard to know what to do if you’ve been arrested. Without a cell phone, and only a few free calls from a precinct, it is difficult at best to reach the help you need. We\'re trying to change that."}
        </p>
      </section>
    )
  }
}

export default Problem
