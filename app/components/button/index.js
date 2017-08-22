import React from 'react'
import { func, string } from 'prop-types'

const Button = ({ className = '', label, onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {label}
  </button>
)

Button.propTypes = {
  className: string,
  label: string,
  onClick: func
}

export default Button
