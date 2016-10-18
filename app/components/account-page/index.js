import React, { Component, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'

class AccountPage extends Component {
  render () {
    const { logOut } = this.props
    return (
      <div className='account-page'>
        <h1>ACCOUNT PAGE</h1>
        <h1>ACCOUNT PAGE</h1>
        <h1>ACCOUNT PAGE</h1>
        <h1>ACCOUNT PAGE</h1>
        <h1>ACCOUNT PAGE</h1>
        <h1>ACCOUNT PAGE</h1>
        <h1>ACCOUNT PAGE</h1>
        <h1>ACCOUNT PAGE</h1>
        <h1>ACCOUNT PAGE</h1>
        <FlatButton
          label='log out'
          onClick={logOut}
        />
      </div>
    )
  }
}

const { object, func } = PropTypes

AccountPage.propTypes = {
  content: object,
  logOut: func
}

export default AccountPage
