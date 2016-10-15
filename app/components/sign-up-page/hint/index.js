import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import renderIf from 'render-if'
import bowser from 'bowser'

class Hint extends Component {
  constructor () {
    super()
    this.state = {dialogClosed: false}
  }

  componentDidMount () {
    if (!this.isDesktop()) {
      document.activeElement.blur()
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }

  closeDialog () { this.setState({dialogClosed: true})
  }

  isDesktop () {
    return window.innerWidth > 640
  }

  render () {
    const {text, confirmLabelText} = this.props

    return (
      <div className={`sign-up-page__hint ${this.props.className || ''}`}>
        {renderIf(this.isDesktop())(
          <div
            className={`sign-up-page__hint-bubble-container`}
            style={{display: bowser.safari ? '-webkit-flex' : 'flex'}}
          >
            <div className='sign-up-page__hint-bubble'>
              <p className='sign-up-page__hint-text'>
                {text}
              </p>
            </div>
            <div className='sign-up-page__hint-bubble-arrow'></div>
          </div>
        )}

        {renderIf(!this.isDesktop())(
          <Dialog
            actions={
              <FlatButton
                label={confirmLabelText}
                labelStyle={{color: '#FDFFF9', fontSize: '14px', letterSpacing: '0.5px'}}
                onTouchTap={this.closeDialog.bind(this)}
              />
            }
            contentStyle={{fontSize: '16px', color: '#FDFFF9', lineHeight: '24px', fontWeight: '300'}}
            bodyStyle={{background: '#40B097', color: '#FDFFF9'}}
            actionsContainerStyle={{background: '#40B097'}}
            modal={false}
            open={!this.state.dialogClosed}
            onRequestClose={this.closeDialog.bind(this)}
          >
            {text}
          </Dialog>
        )}
      </div>
    )
  }
}

Hint.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default Hint
