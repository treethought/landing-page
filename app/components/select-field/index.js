import React, { Component, PropTypes } from 'react'
import MSelectField from 'material-ui/SelectField'
import MMenuItem from 'material-ui/MenuItem'

class SelectField extends Component {
  handleChange (e, k, value) {
    this.props.onChange(value)
  }

  render () {
    const { className, value, menuItems, width, label } = this.props

    return (
      <MSelectField
        className={className || ''}
        autoWidth={true}
        iconStyle={{fill: '#40B097', right: '5px', top: '12px'}}
        menuStyle={{color: '#000000'}}
        labelStyle={{ position: 'relative', bottom: '5px' }}
        onChange={this.handleChange.bind(this)}
        hintText={label}
        hintStyle={{fontSize: '16px', color: '#4A4A4A', fontWeight: '300', textAlign: 'left'}}
        style={{width: width || '100%', boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.24)', paddingLeft: '11px', paddingTop: '3px', marginTop: '6px', textAlign: 'left'}}
        underlineStyle={{borderColor: 'transparent'}}
        maxHeight={200}
        value={value}
      >
        {menuItems.map((opt, i) => (
          <MMenuItem key={i} value={opt.value} primaryText={opt.label} style={{background: '#FFFFFF'}} />
        ))}
      </MSelectField>
    )
  }
}

const { string, func, array } = PropTypes
SelectField.propTypes = {
  className: string,
  onChange: func,
  menuItems: array,
  width: string,
  label: string
}

export default SelectField
