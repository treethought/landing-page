import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import SvgIcon from 'material-ui/SvgIcon'
import FlatButton from 'material-ui/FlatButton'
import MediaQuery from 'react-responsive'
import {Link} from 'react-router'

const navBtns = [
  {label: 'How it works', to: '/how-it-works'},
  {label: 'About us', to: '/about-us'},
  {label: 'Sign up for updates', to: '/', className: 'header__sign-up-btn' }
]

class Header extends Component {
  render () {
    return (
      <div className="header">
        <AppBar
          className="header__app-bar"
          showMenuIconButton={false}
          zDepth={0}
          title={
            <Link to="/">
              <img src="./assets/imgs/logo.png" className="header-logo"/>
            </Link>
          }
          iconElementRight={
            <nav className="header__nav">
              <MediaQuery query="(min-width: 675px)">
                {navBtns.map((btn, i) => (
                  <FlatButton
                    className={`header__nav-btn ${btn.className || ''}`}
                    key={i}
                    label={btn.label}
                    containerElement={<Link to={btn.to} />}
                    hoverColor="#FDFFF9"
                  />
                ))}
              </MediaQuery>

              <MediaQuery query="(max-width: 674px)">
                <IconMenu
                  menuStyle={{ "background": "#F7F9F9" }}
                  iconButtonElement={ <IconButton><MenuIcon /></IconButton> }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                  {navBtns.map((btn, i) => (
                    <MenuItem
                      primaryText={btn.label}
                      key={i}
                      containerElement={<Link to={btn.to} />}
                    />
                  ))}
                </IconMenu>
              </MediaQuery>
            </nav>
          }
        />
      </div>
    )
  }
}

export default Header
