import React, { Component } from 'react'
import { bool, func, object } from 'prop-types'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router'
import ToggleLanguageBtn from './toggle-language-btn'
import NavMenu from './nav-menu'
import NavDropdown from './nav-dropdown'
import navBtns from './nav-btns'
import './index.scss'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = { navBtns: navBtns(props.content) }
  }

  componentDidMount () {
    this.props.getHeaderRef(this.header)
  }

  render () {
    const { content, toggleLocale, inRegistrationFlow } = this.props
    const { navBtns } = this.state

    return (
      <header className='header' ref={el => { this.header = el }}>
        <Link to='/'>
          <h1><img src='/assets/imgs/logo.png' alt='Good Call NYC' className='header__logo' /></h1>
        </Link>

        <nav className='header__nav'>
          <MediaQuery query='(min-width: 950px)'>
            {!inRegistrationFlow && <NavMenu btns={navBtns} />}
          </MediaQuery>

          <ToggleLanguageBtn onClick={toggleLocale} label={content.toggleLanguageBtnLabel} />

          <MediaQuery query='(max-width: 949px)'>
            {!inRegistrationFlow && <NavDropdown btns={navBtns} />}
          </MediaQuery>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  content: object,
  getHeaderRef: func,
  inRegistrationFlow: bool,
  toggleLocale: func
}

export default Header
