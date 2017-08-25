import React, { Component } from 'react'
import { bool, func, object } from 'prop-types'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router'
import ToggleLanguageBtn from './toggle-language-btn'
import NavDropdown from './nav-dropdown'
import navBtns from './nav-btns'
import { Button } from '../index'

class Header extends Component {
  componentDidMount () {
    this.props.getHeaderRef(this.header)
  }

  render () {
    const { content, toggleLocale, inRegistrationFlow } = this.props
    const btns = navBtns(content)

    return (
      <header className='header dark' ref={el => { this.header = el }}>
        <Link to='/'>
          <h1><img src='/assets/imgs/logo.png' alt='Good Call NYC' className='logo' /></h1>
        </Link>

        <nav className='nav'>
          <MediaQuery query='(min-width: 950px)'>
            {!inRegistrationFlow && btns.map(b =>
              <Button {...b} key={b.label} activeClassName='nav-btn-active' />
            )}
          </MediaQuery>

          <ToggleLanguageBtn onClick={toggleLocale} label={content.toggleLanguageBtnLabel} />

          <MediaQuery query='(max-width: 949px)'>
            {!inRegistrationFlow && <NavDropdown btns={btns} />}
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
