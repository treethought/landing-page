import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Problem extends Component {
  render () {
    return (
      <section className="landing-page__problem">
        <h2 className="landing-page__std-header">Everyone deserves fairness.</h2>
        <h3 className="landing-page__std-subheader"><em>The problem</em></h3>

        <p className="landing-page__problem-text">
          Something about increasing fairness for everyone… Bacon ipsum dolor amet pork loin drumstick sausage pastrami. T-bone shankle pork loin cupim. Short loin tri-tip porchetta, pork belly ground round biltong shoulder pork chop. Doner cow meatloaf pork fatback biltong turkey corned beef. Kielbasa porchetta jerky, short ribs andouille fatback jowl drumstick sirloin strip steak.
        </p>

        {/*<RaisedButton
          className="gc-std-btn landing-page__learn-about-us-btn"
          label="learn about us"
          backgroundColor="#45D8B8"
          labelColor="#FFFFFF"
        />*/}
      </section>
    )
  }
}

export default Problem
