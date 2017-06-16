import React, { Component, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

class DonationDialog extends Component {
  constructor (props) {
    super(props)
    this.state = { amount: null }
  }

  changeAmount (e, amount) {
    this.setState({ amount })
  }

  confirmAmount () {
    this.props.onConfirmAmount(this.state.amount)
  }

  render () {
    const { onCancel, open } = this.props

    const actions = [
      <FlatButton
        label='cancel'
        onTouchTap={onCancel}
      />,
      <FlatButton
        label='ok'
        onTouchTap={this.confirmAmount.bind(this)}
      />
    ]

    return (
      <Dialog open={open} actions={actions}>
        <TextField
          floatingLabelText='amount $XX.XX'
          onChange={this.changeAmount.bind(this)}
          type='number'
        />
      </Dialog>
    )
  }
}

const { bool, func } = PropTypes
DonationDialog.propTypes = {
  open: bool,
  onCancel: func,
  onConfirmAmount: func
}

export default DonationDialog
