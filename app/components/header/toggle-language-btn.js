import React from 'react'
import { func, string } from 'prop-types'
import FlatButton from 'material-ui/FlatButton'

const ToggleLanguageBtn = ({ onClick, label }) =>
  <FlatButton
    className='header__nav-btn header__toggle-language-btn'
    label={label}
    onClick={onClick}
    containerElement={<span style={{ display: 'inline-block' }} />}
    hoverColor='#FDFFF9'
  />

ToggleLanguageBtn.propTypes = {
  onClick: func,
  label: string
}

export default ToggleLanguageBtn
