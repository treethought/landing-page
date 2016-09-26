import React, {Component} from 'react'
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
    if (!this.isDesktop) { document.activeElement.blur() }
  }

  closeDialog () {
    this.setState({dialogClosed: true})
  }

  isDesktop () {
    return window.innerWidth > 640
  }

  render () {
    return (
      <div className="sign-up-page__hint">
        {renderIf(this.isDesktop())(
          <div
            className={`sign-up-page__hint-bubble-container ${this.props.className || ''}`}
            style={{display: bowser.safari ? '-webkit-flex' : 'flex'}}
          >
            <div className="sign-up-page__hint-bubble">
              <p className="sign-up-page__hint-text">
                {this.props.text}
              </p>
            </div>
            <div className="sign-up-page__hint-bubble-arrow"></div>
          </div>
        )}

        {renderIf(!this.isDesktop())(
          <Dialog
            actions={
              <FlatButton
                label="GOT IT"
                labelStyle={{color: "#FDFFF9", fontSize: "14px", letterSpacing: "0.5px"}}
                onTouchTap={this.closeDialog.bind(this)}
              />
            }
            contentStyle={{fontSize: "16px", color: "#FDFFF9", lineHeight: "24px", fontWeight: "300"}}
            bodyStyle={{background: "#40B097", color: "#FDFFF9"}}
            actionsContainerStyle={{background: "#40B097"}}
            modal={false}
            open={!this.state.dialogClosed}
            onRequestClose={this.closeDialog.bind(this)}
          >
            {this.props.text}
          </Dialog>
        )}
      </div>
    )
  }
}

export default Hint
