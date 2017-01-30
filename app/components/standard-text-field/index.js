import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'

class StandardTextField extends Component {
  render () {
    const { className, name, type, labelText, errorText, onChange, onFocus, onBlur } = this.props

    return (
      <TextField
        className={className || ''}
        style={{ display: 'block !important', width: '100% !important', height: '58px', marginBottom: '3px' }}
        floatingLabelStyle={{ top: '18px' }}
        floatingLabelFocusStyle={{ fontSize: '14px', color: '#40B097', textTransform: 'uppercase', top: '18px' }}
        inputStyle={{ fontSize: '18px', marginTop: '0' }}
        underlineStyle={{ bottom: '15px' }}
        underlineFocusStyle={{ borderColor: '#40B097', bottom: '15px' }}
        errorStyle={{ lineHeight: '15px' }}

        name={name || ''}
        type={type || ''}

        floatingLabelText={labelText}
        errorText={errorText}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
  }
}

const { string, func } = PropTypes

StandardTextField.propTypes = {
  className: string,
  labelText: string,
  type: string,
  onChange: func,
  onFocus: func,
  name: string,
  errorText: string
}

export default StandardTextField
