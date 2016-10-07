import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import FlatButton from 'material-ui/FlatButton'
import MediaQuery from 'react-responsive'
import {Link} from 'react-router'
import renderIf from 'render-if'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      navBtns: [
        {label: 'FAQ', to: '/faq', className: 'header__nav-btn header__nav-faq-btn', activeClassName: 'header__nav-btn-active'},
        {label: 'About us', to: '/about-us', className: 'header__nav-btn', activeClassName: 'header__nav-btn-active'},
        {label: 'Sign Up', to: '/sign-up', className: 'gc-std-btn header__sign-up-btn'}
      ]
    }
  }

  render () {
    return (
      <header className="header">
        <AppBar
          className="header__app-bar"
          showMenuIconButton={false}
          zDepth={0}
          title={
            <Link to="/">
              <h1 style={{display: 'inline', margin: 0}}>
                <img src="/assets/imgs/logo.png" alt="Good Call NYC" className="header__logo" />
              </h1>
            </Link>
          }
          iconElementRight={
            <nav className="header__nav">
              {renderIf(!(this.props.inRegistrationFlow))(
                <div>
                  <MediaQuery query="(min-width: 675px)">
                    {this.state.navBtns.map((btn, i) => (
                      <FlatButton
                        className={`${btn.className || ''}`}
                        key={i}
                        label={btn.label}
                        containerElement={<Link to={btn.to} activeClassName={btn.activeClassName || ''}/>}
                        hoverColor="#FDFFF9"
                        style={btn.style || {}}
                      />
                    ))}
                  </MediaQuery>

                  <MediaQuery query="(max-width: 674px)">
                    <IconMenu
                      className="header__icon-menu"
                      menuStyle={{ "background": "#F7F9F9" }}
                      iconButtonElement={ <IconButton><MenuIcon /></IconButton> }
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                      {this.state.navBtns.map((btn, i) => (
                        <MenuItem
                          primaryText={btn.label}
                          key={i}
                          containerElement={<Link to={btn.to} />}
                          style={btn.style || {}}
                        />
                      ))}
                    </IconMenu>
                  </MediaQuery>
                </div>
              )}
            </nav>
          }
        />

        {/*renderIf(!(this.props.inRegistrationFlow))(
          <div className="header__hotline-banner">
            <div className="header__hotline-banner-text">
              If you or your loved one has been arrested in the Bronx call <strong>(347)-95 BRONX</strong>
            </div>
          </div>
        )*/}
      </header>
    )
  }
}

export default Header
