import React, { Component } from 'react'
import { string } from 'prop-types'

const digits = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['∗', '0', '#']
]

class Keypad extends Component {
  constructor () {
    super()
    this.state = { number: '' }
    this.onChange = this.onChange.bind(this)
    this.onKeyClick = this.onKeyClick.bind(this)
  }

  onChange (e) {
    this.setState({ number: e.target.value })
  }

  onKeyClick (key) {
    return e => {
      const { number } = this.state
      this.setState({ number: number + key })
    }
  }

  render () {
    const { label } = this.props
    const { number } = this.state

    return (
      <div className='keypad'>
        <input
          className='phone'
          placeholder={label}
          type='phone'
          onChange={this.onChange}
          value={number}
        />
        <div className='digits-container'>
          {digits.map((row, i) => (
            <div className='row' key={i}>
              {row.map((key, j) => (
                <div className='key-container' key={`${i}-${j}`} onClick={this.onKeyClick(key)}>
                  <div className='key'>{key}</div>
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
