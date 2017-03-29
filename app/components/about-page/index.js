import React, {Component, PropTypes} from 'react'
import {Grid, Row, Cell} from 'react-inline-grid'
import SimplePanel from './../simple-panel'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router'
import { triggerEvent } from './../../services/ga'

class AboutPage extends Component {
  render () {
    const { content } = this.props.route

    const TwoColPanel = ({className, heading, text, children}) => (
      <div className={`about-page__two-col-panel ${className || ''}`}>
        <Grid>
          <Row>
            <Cell is='5'>
              <h2 className='about-page__two-col-panel-subheader'>{heading}</h2>
            </Cell>
            <Cell is='7'>
              <p className='about-page__two-col-panel-paragraph' dangerouslySetInnerHTML={{__html: text}} />
            </Cell>
          </Row>
        </Grid>
        {children}
      </div>
    )

    return (
      <div className='about-page'>
        <div className='about-page__banner'>
          <h1 className='about-page__banner-header'>{content.header}</h1>
        </div>

        <TwoColPanel
          heading={content.aboutUs.header}
          text={content.aboutUs.text}
        />

        <SimplePanel
          font-weight='300'
          backgroundColor='#40B097'
          color='#FDFFF9'
          text={content.ourMissionText}
        />

        <TwoColPanel
          className='about-page__our-team'
          heading={content.ourTeam.header}
          text={content.ourTeam.text}
        >
          <img className='about-page__team-photo' src='/assets/imgs/team-photo-min.png' />
        </TwoColPanel>

        <div className='about-page__horiz-divider' />

        <TwoColPanel
          heading={content.joinTheMovement.header}
          text={content.joinTheMovement.text}
          className='about-page__join-our-movement'
        >
          <Grid>
            <Row>
              <Cell is='5' />
              <Cell is='7'>
                <FlatButton
                  className='about-page__sign-up-btn gc-std-btn'
                  style={{ backgroundColor: '#40B097' }}
                  label={content.signUpBtnLabel}
                  onClick={triggerEvent('sign-up-btn-clicked')}
                  containerElement={<Link to='/sign-up' />}
                />
              </Cell>
            </Row>
          </Grid>
        </TwoColPanel>
      </div>
    )
  }
}

const { object } = PropTypes
AboutPage.propTypes = {
  route: object
}

export default AboutPage
