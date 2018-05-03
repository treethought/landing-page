import React, { Component } from 'react'
import { bool, func, object } from 'prop-types'
import { Link } from 'react-router'
import NavDropdown from './nav-dropdown'
import navBtns from './nav-btns'
import { Button } from '../index'

class Header extends Component {
  componentDidMount () {
    this.props.getHeaderRef(this.header)
  }

  render () {
    const { content, toggleLocale, inRegistrationFlow } = this.props
    const btns = navBtns(content, toggleLocale)

    return (
      <header className='header dark' ref={el => { this.header = el }}>
        <Link to='/'>
          <h1><img src='/assets/imgs/logo.png' alt='Good Call NYC' className='logo' /></h1>
        </Link>

        <nav className='nav'>
          <Button
            label='Join us in NYC on 5/24!'
            href='https://justiceforall.splashthat.com/'
            activeClassName='nav-btn-active'
            className='nav-btn dark link nav-petition-link'
          />

          <div className='nav-menu'>
            {!inRegistrationFlow && btns.map(b =>
              <Button {...b} key={b.label} />
            )}
          </div>

          <div className='nav-dropdown'>
            {!inRegistrationFlow && <NavDropdown btns={btns} />}
          </div>
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
