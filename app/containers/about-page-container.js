import React, { Component } from 'react'
import { AboutPage } from '../components'
import { fetchMetrics } from '../services/api'

class AboutPageContainer extends Component {
  constructor () {
    super()
    this.state = {
      rightsIndex: 0,
      metrics: { calls: '', lsps: '', time: '' },
      interval: null,
      bannerHeader: null,
      rightsClass: '',
      metricsShown: false
    }
    this.showMetrics = this.showMetrics.bind(this)
  }

  componentWillMount () {
    fetchMetrics(metrics => {
      this.setState({ metrics })
    }, console.error)
  }

  componentDidMount () {
    const { rights } = this.props.route.content.header
    const interval = setInterval(() => {
      this.setState({ rightsClass: 'hide' })
      setTimeout(() => {
        this.setState({ rightsIndex: (this.state.rightsIndex + 1) % rights.length })
        setTimeout(() => {
          this.setState({ rightsClass: 'show' })
        }, 500)
      }, 1000)
    }, 5000)
    this.setState({ interval })
  }

  componentWillUnmount () {
    clearInterval(this.state.interval)
  }

  showMetrics () {
    if (!this.state.metricsShown) {
      this.setState({ metricsShown: true })
    }
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
        showMetrics={this.showMetrics}
      />
    )
  }
}

export default AboutPageContainer
