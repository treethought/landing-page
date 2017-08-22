import React from 'react'
import { func, string } from 'prop-types'

const Button = ({ className = '', label, onClick, selector = 'plain' }) => {
  return (
    <button className={`button ${selector} ${className}`} onClick={onClick}>
      <span>
        {label}
      </span>
    </button>
  )
}

Button.propTypes = {
  className: string,
  label: string,
  onClick: func,
  selector: string
}

export default Button
