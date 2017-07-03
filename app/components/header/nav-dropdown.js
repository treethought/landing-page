import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { Link } from 'react-router'

const NavDropdown = ({ btns }) =>
  <IconMenu
    className='header__icon-menu'
    menuStyle={{ 'background': '#F7F9F9' }}
    iconButtonElement={<IconButton><MenuIcon /></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    {btns.map((btn, i) => (
      <MenuItem
        primaryText={btn.label}
        key={i}
        onClick={btn.onClick}
        containerElement={<Link to={btn.to} />}
        style={btn.style || {}}
        />
    ))}
  </IconMenu>

export default NavDropdown
