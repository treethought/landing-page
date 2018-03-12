import React, { Component } from 'react'
import { Button } from '../../index'
import cookie from 'react-cookie'

class Petition extends Component {
  constructor () {
    super()
    this.state = {
      petitionSeen: cookie.load('petitionSeen', { path: '/' })
    }
    this.close = this.close.bind(this)
    this.signPetition = this.signPetition.bind(this)
  }

  close () {
    cookie.save('petitionSeen', true, { path: '/' })
    this.setState({ petitionSeen: true })
  }

  signPetition () {
    cookie.save('petitionSeen', true, { path: '/' })
    window.location.href = 'https://www.change.org/p/new-york-city-council-good4nyc-five-boroughs-one-hotline-for-justice-ddee9e6c-3ef3-4881-a21c-d24b768f4403'
  }

  render () {
    if (this.state.petitionSeen) return null

    return (
      <div className='petition'>
        <img className='petition__img' src='/assets/imgs/petition.svg' />
        <div className='petition__close-btn' onClick={this.close}>
          <span>Return to www.goodcall.nyc</span>
        </div>
        <div className='petition__content'>
          <div className='petition__desc'>
            <h2 className='petition__header'>#Good4NYC</h2>
            <h3 className='petition__subheader'>Five boroughs, <span className='petition__subheader-green'>one number for justice</span></h3>
            <p className='petition__p'>Good Call is currently available in the Bronx, but this is a resource needed by all New Yorkers. Join the fight for fairness. Sign our petition to show that you support Good Call for all of NYC.</p>
          </div>
          <div className='petition__cta'>
            <Button className='petition__btn' onClick={this.signPetition} label='Sign our petition' selector='primary' />
          </div>
        </div>
      </div>
    )
  }
}

export default Petition
