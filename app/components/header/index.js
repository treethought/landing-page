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
import Checkout from '../../services/checkout'
import DonationDialog from './donation-dialog'

class Header extends Component {
  constructor (props) {
    super(props)
    const { content } = props
    this.state = {
      donationDialogOpen: false,
      navBtns: [{
        label: content.faqBtnLabel,
        to: '/faq',
        className: 'header__nav-btn',
        activeClassName: 'header__nav-btn-active'
      }, {
        label: content.aboutUsBtnLabel,
        to: '/about-us',
        className: 'header__nav-btn',
        activeClassName: 'header__nav-btn-active'
      }, {
        label: content.donateBtnLabel,
        to: '/stub',
        onClick: e => {
          e.preventDefault()
          this.openDonationDialog()
        },
        className: 'header__nav-btn',
        activeClassName: 'header__nav-btn-active'
      }, {
        label: content.signUpBtnLabel,
        to: '/sign-up',
        className: 'gc-std-btn header__sign-up-btn'
      }]
    }
  }

  openDonationDialog () {
    this.setState({ donationDialogOpen: true })
  }

  closeDonationDialog () {
    this.setState({ donationDialogOpen: false })
  }

  confirmDonationAmount (amount) {
    this.closeDonationDialog()
    Checkout(amount)
  }

  render () {
    const { content, toggleLocale, inRegistrationFlow } = this.props
    const { donationDialogOpen } = this.state

    const ToggleLanguageBtn = () => (
      <FlatButton
        className='header__nav-btn header__toggle-language-btn'
        label={content.toggleLanguageBtnLabel}
        onClick={toggleLocale}
        containerElement={<span style={{ display: 'inline-block' }} />}
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
              <DonationDialog
                open={donationDialogOpen}
                onConfirmAmount={this.confirmDonationAmount.bind(this)}
                onCancel={this.closeDonationDialog.bind(this)}
              />

              <MediaQuery query='(min-width: 950px)'>

                {this.state.navBtns.map((btn, i) => (
                  <FlatButton
                    className={`green-on-hover ${btn.className || ''}`}
                    onClick={btn.onClick}
                    key={i}
                    label={btn.label}
                    containerElement={<Link to={btn.to} activeClassName={btn.activeClassName || ''} />}
                    hoverColor='#FDFFF9'
                    style={{display: inRegistrationFlow ? 'none' : 'inline-block'}}
                  />
                ))}

                <ToggleLanguageBtn />
              </MediaQuery>

              <MediaQuery query='(max-width: 949px)'>
                <ToggleLanguageBtn />

                {renderIf(!this.props.inRegistrationFlow)(
                  <IconMenu
                    className='header__icon-menu'
                    menuStyle={{ 'background': '#F7F9F9' }}
                    iconButtonElement={<IconButton><MenuIcon /></IconButton>}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    {this.state.navBtns.map((btn, i) => (
                      <MenuItem
                        primaryText={btn.label}
                        key={i}
                        onClick={btn.onClick}
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

        {renderIf(!(this.props.inRegistrationFlow))(
          <div className='header__hotline-banner'>
            <div className='header__hotline-banner-text'>
              <b>{content.hotlineBannerText}</b>
            </div>
          </div>
        )}
      </header>
    )
  }
}

const { bool, func, object } = PropTypes
Header.propTypes = {
  content: object,
  inRegistrationFlow: bool,
  toggleLocale: func
}

export default Header
