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
  }

  onChange (e) {
    this.setState({ number: e.target.value })
  }

  onKeyClick (key) {
    const { number } = this.state
    const del = e => { this.setState({ number: number.slice(0, -1) }) }
    const cancel = e => { this.setState({ number: '' }) }
    const push = e => { this.setState({ number: number + key }) }
    return {
      dialpad_delete_arrow: del,
      dialpad_cancel: cancel
    }[key] || push
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
