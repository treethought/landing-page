import React from 'react'
import { func, string } from 'prop-types'
import { Button } from '../index'

const ToggleLanguageBtn = ({ onClick, label }) =>
  <Button
    className='nav-btn dark'
    label={label}
    onClick={onClick}
  />

ToggleLanguageBtn.propTypes = {
  onClick: func,
  label: string
}

export default ToggleLanguageBtn
