import React, { Component } from 'react'
import { string } from 'prop-types'

const digits = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['dialpad_delete_arrow', 0, 'dialpad_cancel']
]

class Keypad extends Component {
  constructor () {
    super()
    this.state = { number: '' }
    this.onChange = this.onChange.bind(this)
    this.onKeyClick = this.onKeyClick.bind(this)
    this.setNumber = this.setNumber.bind(this)
  }

  onChange (e) {
    this.setNumber(e.target.value)
  }

  onKeyClick (key) {
    return e => {
      const { number } = this.state
      const nextNumber = typeof key === 'number'
        ? number + key
        : { dialpad_delete_arrow: number.slice(0, -1), dialpad_cancel: '' }[key]
      this.setNumber(nextNumber)
    }
  }

  setNumber (number) {
    this.setState({ enterArrowDisplayed: number.length >= 10, number })
  }

  render () {
    const { label } = this.props
    const { number, enterArrowDisplayed } = this.state

    return (
      <div className='keypad'>

        <div className='phone-container'>
          <input
            className='phone'
            placeholder={label}
            type='tel'
            onChange={this.onChange}
            value={number}
          />
          {enterArrowDisplayed && <img src='/assets/imgs/dialpad_enter_btn.svg' className='phone-enter-arrow' />}
        </div>
        <div className='digits-container'>
          {digits.map((row, i) => (
            <div className='row' key={i}>
              {row.map((key, j) => (
                <div className='key-container' key={`${i}-${j}`} onClick={this.onKeyClick(key)}>
                  <div className='key'>
                    {typeof key === 'number'
                      ? key
                      : <img src={`/assets/imgs/${key}.svg`} className='key-icon' />
                    }
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Keypad.propTypes = {
  label: string
}

export default Keypad
