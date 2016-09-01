import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SvgIcon from 'material-ui/SvgIcon'
import FlatButton from 'material-ui/FlatButton'

class Header extends Component {
  render () {
    return (
      <div className="landing-page__header">
        <AppBar
          className="landing-page__app-bar"
          showMenuIconButton={false}
          zDepth={0}
          title={
            <img src="./assets/imgs/logo.svg"/>
          }
          iconElementRight={
            <nav>
              <FlatButton className="landing-page__header-nav-btn" label="How it works" />
              <FlatButton className="landing-page__header-nav-btn" label="About us" />
              <FlatButton className="landing-page__header-nav-btn" label="Contact us" />
              <FlatButton className="landing-page__header-nav-btn" label="Log in" />
            </nav>
          }
        >
        </AppBar>
      </div>
    )
  }
}

export default Header
