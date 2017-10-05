import React, { Component } from 'react'
import { AboutPage } from '../components'
import { fetchMetrics } from '../services/api'

class AboutPageContainer extends Component {
  constructor () {
    super()
    this.state = {
      rightsIndex: 0,
      metrics: { calls: '', lsps: '', time: '' },
      interval: null
    }
  }

  componentWillMount () {
    fetchMetrics(metrics => {
      this.setState({ metrics })
    }, console.error)
  }

  componentDidMount () {
    const { rights } = this.props.route.content.header
    const interval = setInterval(() => {
      this.setState({ rightsIndex: (this.state.rightsIndex + 1) % rights.length })
    }, 3000)
    this.setState({ interval })
  }

  componentWillUnmount () {
    clearInterval(this.state.interval)
  }

  render () {
    const { innerPageContentPadding, route } = this.props
    const { metrics } = this.state
    const carouselHeight = `calc(100vh - ${innerPageContentPadding})`

    return (
      <AboutPage
        {...this.state}
        content={route.content}
        metrics={metrics}
        carouselHeight={carouselHeight}
      />
    )
  }
}

export default AboutPageContainer
