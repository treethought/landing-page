import React, {Component} from 'react'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

class SuccessPanels extends Component {
  render () {
    return (
      <div>
        <h1>UR DONE</h1>
        <RaisedButton label="GO BACK" containerElement={<Link to="/" />}/>
      </div>
    )
  }
}

export default SuccessPanels
