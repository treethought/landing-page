import React, { PropTypes, Component } from 'react'
import range from 'lodash.range'
import rangeRight from 'lodash.rangeRight'
import { SelectField } from '../index'
import every from 'lodash.every'
import moment from 'moment'
import update from 'react-addons-update'

class DateField extends Component {
  constructor (props) {
    super(props)
    this.state = { month: null, day: null, year: null }
  }

  handleChange (field, value) {
    const newState = update(this.state, { [field]: { $set: value } })
    if (every(newState)) {
      const { month, day, year } = newState
      const date = moment(`${month}-${day}-${year}`, 'M-D-YYYY').format()
      this.props.onChange(date)
    }
    this.setState(newState)
  }

  render () {
    const dateOptions = {
      months: range(1, 13).map(n => ({label: n, value: n})),
      days: range(1, 32).map(n => ({label: n, value: n})),
      years: rangeRight(1916, 1999).map(n => ({label: n, value: n}))
    }

    const { onClick, labelText } = this.props
    const { month, day, year } = this.state

    return (
      <div className='date-field' onClick={onClick} onTouchStart={onClick}>
        <label className='date-field__label'>{labelText}</label>

        <div className='date-field__select-fields'>
          <SelectField
            width='75px'
            label='Month'
            menuItems={dateOptions.months}
            className='date-field__select-field'
            value={month}
            onChange={this.handleChange.bind(this, 'month')}
          />
          <SelectField
            width='60px'
            label='Day'
            menuItems={dateOptions.days}
            className='date-field__select-field'
            value={day}
            onChange={this.handleChange.bind(this, 'day')}
          />
          <SelectField
            width='65px'
            label='Year'
            menuItems={dateOptions.years}
            className='date-field__select-field'
            value={year}
            onChange={this.handleChange.bind(this, 'year')}
          />
        </div>
      </div>
    )
  }
}

const { func, string } = PropTypes
DateField.propTypes = {
  onClick: func,
  onChange: func,
  labelText: string
}

export default DateField
