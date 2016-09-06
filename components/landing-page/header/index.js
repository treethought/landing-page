import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import SvgIcon from 'material-ui/SvgIcon'
import FlatButton from 'material-ui/FlatButton'
import MediaQuery from 'react-responsive'

const navBtns = [
  {label: "How it works"},
  {label: "About us"},
  {label: "Contact Us"},
  {label: "Log In"}
]

class Header extends Component {
  render () {
    return (
      <div className="landing-page__header">
        <AppBar
          className="landing-page__app-bar"
          showMenuIconButton={false}
          zDepth={0}
          title={ <img src="./assets/imgs/logo.svg"/> }
          iconElementRight={
            <nav className="landing-page__header-nav">
              <MediaQuery query="(min-width: 675px)">
                {navBtns.map((btn, i) => (
                  <FlatButton className="landing-page__header-nav-btn" label={btn.label} key={i}/>
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
                    <MenuItem primaryText={btn.label} key={i}/>
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
