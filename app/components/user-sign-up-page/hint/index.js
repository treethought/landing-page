import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import renderIf from 'render-if'
import bowser from 'bowser'
import { isDesktop } from '../../../services/utils'
import './index.scss'

class Hint extends Component {
  constructor () {
    super()
    this.state = { dialogClosed: false }
  }

  componentDidMount () {
    if (!isDesktop) { document.activeElement.blur() }
  }

  closeDialog () {
    this.setState({ dialogClosed: true })
  }

  render () {
    const { text, confirmLabelText, top, show } = this.props
    const { dialogClosed } = this.state

    return (
      <div
        className={`sign-up-page__hint ${this.props.className || ''}`}
      >
        {renderIf(isDesktop)(
          <div
            className={`sign-up-page__hint-bubble-container`}
            style={{
              display: bowser.safari ? '-webkit-flex' : 'flex',
              opacity: show ? 1 : 0
            }}
          >
            <div className='sign-up-page__hint-bubble'>
              <p className='sign-up-page__hint-text'>
                {text}
              </p>
            </div>
            <div className='sign-up-page__hint-bubble-arrow' style={{ top: top }} />
          </div>
        )}

        {renderIf(!isDesktop && show)(
          <Dialog
            actions={
              <FlatButton
                label={confirmLabelText}
                labelStyle={{ color: '#FDFFF9', fontSize: '14px', letterSpacing: '0.5px' }}
                onTouchTap={this.closeDialog.bind(this)}
              />
            }
            style={{ zIndex: 10000 }}
            contentStyle={{ fontSize: '16px', color: '#FDFFF9', lineHeight: '24px', fontWeight: '300' }}
            bodyStyle={{ background: '#40B097', color: '#FDFFF9' }}
            actionsContainerStyle={{ background: '#40B097' }}
            modal={true}
            open={!dialogClosed}
            onRequestClose={this.closeDialog.bind(this)}
          >
            {text}
          </Dialog>
        )}
      </div>
    )
  }
}

const { string, node, bool } = PropTypes
Hint.propTypes = {
  className: string,
  text: string,
  target: node,
  top: string,
  show: bool
}

export default Hint
