import React from 'react'
import { func, string } from 'prop-types'
import { Link } from 'react-router'

const Button = ({ className = '', label, onClick, selector = 'plain', to, href, activeClassName }) => {
  const Wrapper = ({ children }) => to
    ? <Link to={to} activeClassName={activeClassName}>{children}</Link>
    : <a href={href}>{children}</a>

  return (
    <Wrapper>
      <button className={`button ${selector} ${className}`} onClick={onClick}>
        <span>
          {label}
        </span>
      </button>
    </Wrapper>
  )
}

Button.propTypes = {
  className: string,
  href: string,
  label: string,
  onClick: func,
  selector: string,
  to: string
}

export default Button
