import React, { Component } from 'react'
import { Footer } from '../components'
import { subscribeToMailingList } from '../services/api'

class FooterContainer extends Component {
  constructor () {
    super()
    this.state = { subscribedToMailingList: false, email: null, error: null }
  }

  setEmail (e) {
    this.setState({ email: e.target.value })
  }

  subscribeToMailingList () {
    subscribeToMailingList(this.state.email, () => {
      this.setState({ subscribedToMailingList: true })
    }, err => {
      this.setState({ error: err.email })
    })
  }

  render () {
    return (
      <Footer
        {...this.props}
        {...this.state}
        subscribeToMailingList={this.subscribeToMailingList.bind(this)}
        setEmail={this.setEmail.bind(this)}
      />
    )
  }
}

export default FooterContainer
