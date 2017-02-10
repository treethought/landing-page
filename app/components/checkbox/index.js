import React, { PropTypes, Component } from 'react'
import MCheckbox from 'material-ui/Checkbox'

class Checkbox extends Component {
  onCheck (e, isInputChecked) {
    this.props.onCheck(isInputChecked)
  }

  render () {
    const { label, className, defaultChecked = true } = this.props

    return (
      <MCheckbox
        label={label}
        className={className || ''}
        defaultChecked={defaultChecked}
        onCheck={this.onCheck.bind(this)}
        style={{textAlign: 'left'}}
        iconStyle={{width: '32px', height: '32px', fill: '#40B097'}}
        labelStyle={{fontSize: '16px', color: '#4A4A4A', lineHeight: '24px', fontWeight: '300'}}
      />
    )
  }
}

const { string, func, bool } = PropTypes
Checkbox.propTypes = {
  label: string,
  onCheck: func,
  className: string,
  defaultChecked: bool
}

export default Checkbox
