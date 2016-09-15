import React, {Component} from 'react'

class SimplePanel extends Component {
  render () {
    return (
      <div
        className="simple-panel"
        style={{backgroundColor: this.props.backgroundColor, color: this.props.color}}
      >
        <p className="simple-panel__text" style={{fontWeight: this.props.fontWeight}}>
          {this.props.text}
        </p>
      </div>
    )
  }
}

export default SimplePanel
