import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import FlatButton from 'material-ui/FlatButton'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router'
import renderIf from 'render-if'

class Header extends Component {
  constructor (props) {
    super(props)
    const { content } = props
    this.state = {
      navBtns: [
        {label: content.faqBtnLabel, to: '/faq', className: 'header__nav-btn', activeClassName: 'header__nav-btn-active'},
        {label: content.aboutUsBtnLabel, to: '/about-us', className: 'header__nav-btn', activeClassName: 'header__nav-btn-active'},
        {label: content.signUpBtnLabel, to: '/sign-up', className: 'gc-std-btn header__sign-up-btn'}
      ]
    }
  }

  render () {
    const {content, toggleLocale, inRegistrationOrLoginFlow} = this.props

    const ToggleLanguageBtn = () => (
      <FlatButton
        className='header__nav-btn header__toggle-language-btn'
        label={content.toggleLanguageBtnLabel}
        onClick={toggleLocale}
        containerElement={<span style={{display: 'inline-block'}} />}
        hoverColor='#FDFFF9'
      />
    )

    return (
      <header className='header'>
        <AppBar
          className='header__app-bar'
          showMenuIconButton={false}
          zDepth={0}
          title={
            <Link to='/'>
              <h1 style={{display: 'inline', margin: 0}}>
                <img src='/assets/imgs/logo.png' alt='Good Call NYC' className='header__logo' />
              </h1>
            </Link>
          }
          iconElementRight={
            <nav className='header__nav'>
              <MediaQuery query='(min-width: 850px)'>
                {this.state.navBtns.map((btn, i) => (
                  <FlatButton
                    className={`${btn.className || ''}`}
                    key={i}
                    label={btn.label}
                    containerElement={<Link to={btn.to} activeClassName={btn.activeClassName || ''}/>}
                    hoverColor='#FDFFF9'
                    style={{opacity: inRegistrationOrLoginFlow ? 0 : 1}}
                  />
                ))}

                <ToggleLanguageBtn />
              </MediaQuery>

              <MediaQuery query='(max-width: 849px)'>
                <ToggleLanguageBtn />

                {renderIf(!this.props.inRegistrationOrLoginFlow)(
                  <IconMenu
                    className='header__icon-menu'
                    menuStyle={{ 'background': '#F7F9F9' }}
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
                )}
              </MediaQuery>
            </nav>
          }
        />

      {renderIf(!(this.props.inRegistrationOrLoginFlow))(
          <div className='header__hotline-banner'>
            <div className='header__hotline-banner-text'>
              {content.hotlineBannerText}
            </div>
          </div>
        )}
      </header>
    )
  }
}

Header.propTypes = {
  content: PropTypes.object,
  inRegistrationOrLoginFlow: PropTypes.bool,
  toggleLocale: PropTypes.func
}

export default Header
