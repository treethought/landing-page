import React from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'

const NavMenu = ({ btns }) =>
  <div>
    {btns.map((btn, i) => (
      <FlatButton
        className={`green-on-hover ${btn.className || ''}`}
        style={btn.style}
        onClick={btn.onClick}
        key={i}
        label={btn.label}
        containerElement={<Link to={btn.to} activeClassName={btn.activeClassName || ''} />}
        hoverColor='#FDFFF9'
        />
    ))}
  </div>

export default NavMenu
