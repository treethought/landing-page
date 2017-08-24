import React, { Component } from 'react'

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
  }

  render () {
    return (
      <div className='keypad'>
        <input className='phone' placeholder={'Enter a loved one\'s phone number'} type='phone' />
        <div className='digits-container'>
          {digits.map(row => (
            <div className='row'>
              {row.map(key => (
                <div className='key-container'>
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

export default Keypad
