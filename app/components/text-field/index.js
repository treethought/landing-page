import React, { Component, PropTypes } from 'react'
import MTextField from 'material-ui/TextField'
import { isDesktop } from '../../services/utils'

class TextField extends Component {
  onChange (e) {
    this.props.onChange(e.target.value)
  }

  render () {
    const { className, name, type, labelText, errorText, onFocus, onBlur } = this.props

    return (
      <MTextField
        className={className || ''}
        style={{ display: 'block !important', width: '100% !important', height: '58px', marginBottom: '3px' }}
        floatingLabelStyle={{ top: '18px', fontSize: isDesktop ? '18px' : '14px', whiteSpace: 'nowrap' }}
        floatingLabelShrinkStyle={{ textTransform: 'uppercase', fontSize: isDesktop ? '14px' : '12px', color: '#40B097', top: '18px' }}
        inputStyle={{ marginTop: '0' }}
        underlineStyle={{ bottom: '15px' }}
        underlineFocusStyle={{ borderBottomColor: '#40B097', bottom: '15px' }}
        errorStyle={{ lineHeight: '15px' }}

        name={name || ''}
        type={type || 'text'}

        floatingLabelText={labelText}
        errorText={errorText}
        onChange={this.onChange.bind(this)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
  }
}

const { string, func } = PropTypes

TextField.propTypes = {
  className: string,
  labelText: string,
  type: string,
  onChange: func,
  onFocus: func,
  name: string,
  errorText: string
}

export default TextField
