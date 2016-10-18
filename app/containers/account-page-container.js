import React, { Component, PropTypes } from 'react'
import AccountPage from './../components/account-page'
import fetcher from './../services/fetcher'
import config from './../config'
import renderIf from 'render-if'
import LoadingOverlay from './../components/loading-overlay'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'

class AccountPageContainer extends Component {
  constructor () {
    super()
    this.state = {
      authorized: false
    }
  }

  componentWillMount () {
    this.fetchUser()
  }

  fetchUser () {
    fetcher({
      method: 'GET',
      url: `${config.apiBaseUrl}/users/me`
    }).then((res) => {
      const { data, included } = res.json
      this.setState({ authorized: true, data, included })
    })
  }

  logOut () {
    cookie.remove('accessToken')
    browserHistory.push('/')
  }

  render () {
    const { authorized } = this.state

    return (
      <div>
        {renderIf(!authorized)(
          <LoadingOverlay />
        )}
        {renderIf(authorized)(
          <AccountPage
            logOut={this.logOut}
          />
        )}
      </div>
    )
  }
}

const { object } = PropTypes
AccountPageContainer.propTypes = {
  route: object,
  location: object
}

export default AccountPageContainer
