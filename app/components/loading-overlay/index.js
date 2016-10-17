import React, { Component } from 'react'

class LoadingOverlay extends Component {
  render () {
    return (
      <div className='loading-overlay'>
        <div className='loading-overlay__text'>Loading ...</div>
      </div>
    )
  }
}

export default LoadingOverlay
