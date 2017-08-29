import React, { Component } from 'react'
import { AboutPage } from '../components'
import { fetchMetrics } from '../services/api'

class AboutPageContainer extends Component {
  constructor () {
    super()
    this.state = { metrics: { calls: '', lsps: '', time: '' } }
  }

  componentWillMount () {
    fetchMetrics(metrics => {
      this.setState({ metrics })
    }, console.error)
  }

  render () {
    const { content } = this.props.route
    const { metrics } = this.state
    return (
      <AboutPage
        {...this.state}
        content={content}
        metrics={metrics}
      />
    )
  }
}

export default AboutPageContainer
