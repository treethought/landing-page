import React, { Component } from 'react'
import CountUp from 'react-countup'
import Waypoint from 'react-waypoint'

class Metrics extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.metricsShown && nextProps.metricsShown) {
      return false
    } else {
      return true
    }
  }

  render () {
    const { content, metrics, showMetrics, metricsShown } = this.props

    const formattedMetrics = [
      { type: 'calls' },
      { type: 'lsps' },
      { type: 'time', suffix: 's' }
    ]

    return (
      <div>
        <div className='metrics-subheader'>{content.aboutUs.metrics.header}</div>

        <Waypoint onEnter={showMetrics}>
          {metricsShown && (
            <div className='metrics-container'>
              {formattedMetrics.map(({ type, suffix }, i) => (
                <div className='metric' key={i}>
                  <div className='number'>{metrics[type] ? <CountUp start={0} end={metrics[type]} /> : '--'}{suffix}</div>
                  <div className='label'>{content.aboutUs.metrics.metrics[type]}</div>
                </div>
              ))}
            </div>
          )}
        </Waypoint>
      </div>
    )
  }
}

export default Metrics
