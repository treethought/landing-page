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
  }

  signPetition () {
    cookie.save('petitionSeen', true, { path: '/' })
    window.location.href = 'https://google.com/'
  }

  render () {
    if (this.state.petitionSeen) return null

    return (
      <div className='petition'>
        <img className='petition__img' src='/assets/imgs/petition.svg' />
        <div className='petition__close-btn' onClick={this.close}>Return to www.goodcall.nyc</div>
        <div className='petition__content'>
          <div className='petition__desc'>
            <h2 className='petition__header'>#Good4NYC</h2>
            <h3 className='petition__subheader'>Five boroughs, <span className='petition__subheader-green'>one number for justice</span></h3>
            <p className='petition__p'>Good Call is currently available in the Bronx, but this is a resource needed by all New Yorkers. Join the fight for fairness. Sign our petition to show that you support Good Call for all of NYC.</p>
          </div>
          <div className='petition__cta'>
            <Button className='petition__btn' onClick={this.signPetition} label='Sign our petition' selector='primary' />
            <div className='petition__signatures'>received 2000 signatures</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Petition
