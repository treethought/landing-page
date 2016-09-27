import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

class StandardTextField extends Component {
  render () {
    return (
      <TextField
        className={this.props.className || ''}
        style={{ display: 'block !important', width: '100% !important', height: '58px', marginBottom: '3px' }}
        floatingLabelStyle={{ top: '18px' }}
        floatingLabelFocusStyle={{ fontSize: '14px', color: '#40B097', textTransform: 'uppercase', top: '18px' }}
        inputStyle={{ fontSize: '18px', marginTop: '0' }}
        underlineStyle={{ bottom: '15px' }}
        underlineFocusStyle={{ borderColor: '#40B097', bottom: '15px' }}
        errorStyle={{ lineHeight: '15px', textAlign: 'left' }}

        name={this.props.name || ''}
        type={this.props.type || ''}

        floatingLabelText={this.props.labelText}
        errorText={this.props.errorText}
        onChange={this.props.onChange}
        onFocus={this.props.onFocus}
      />
    )
  }
}

export default StandardTextField
