import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class Header extends Component {
  render () {
    return (
      <div className="landing-page__header">
        <AppBar
          showMenuIconButton={false}
          title={<span>GC</span>}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Intro" onTouchTap={this.props.scrollToIntro}/>
              <MenuItem primaryText="How It Works" onTouchTap={this.props.scrollToHowItWorks}/>
            </IconMenu>
          }
        >
        </AppBar>
      </div>
    )
  }
}

export default Header
