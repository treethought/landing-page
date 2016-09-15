import React, {Component} from 'react'
import InnerPage from '../inner-page'
import {Grid, Row, Cell} from 'react-inline-grid'
import SimplePanel from './../simple-panel'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router'

class AboutPage extends Component {
  render () {
    let TwoColPanel = ({className, heading, text, children}) => (
      <div className={`about-page__two-col-panel ${className || ''}`}>
        <Grid>
          <Row>
            <Cell is="5">
              <h2 className="about-page__two-col-panel-subheader">{heading}</h2>
            </Cell>

            <Cell is="7">
              <p className="about-page__two-col-panel-paragraph" dangerouslySetInnerHTML={{__html: text}}></p>
            </Cell>
          </Row>
        </Grid>

        {children}
      </div>
    )

    return (
      <InnerPage>
        <div className="about-page">
          <div className="about-page__banner">
            <h1 className="about-page__banner-header">We believe everyone deserves fairness.</h1>
          </div>

          <TwoColPanel
            heading="About Us."
            text={"Good Call is a project started within the <a class='about-page__paragraph-link' href='https://labs.robinhood.org/fellowship/'>Blue Ridge Labs fellowship</a>, a five month program where teams build digital products aimed at addressing key issues faced by low-income New Yorkers, with an approach focused on human-centered design, testing, and outreach work. We built Good Call after months of research and discussions with people in New York communities. We heard countless stories from people who were arrested for trivial reasons, and how uncomfortable, painful, confusing, and damaging this experience can be. We decided to try to do we could to help address this issue."}
          />

          <SimplePanel
            font-weight="300"
            backgroundColor="#40B097"
            color="#FDFFF9"
            text="Our mission is to make the arrest process and its aftermath less painful and harmful for those that are detained and their loved ones. We strive to make this process more transparent and just for all New Yorkers regardless of income."
          />

          <TwoColPanel
            className="about-page__our-team"
            heading="Our team."
            text={"We come from a diverse set of backgrounds and experiences, from 3D Printing to web design to community organizing. However, we share a passion for creating a better a more just New York City for everyone."}
          />

          <TwoColPanel
            heading="Join our movement."
            text={"We are currently preparing to launch a pilot in the Bronx. If you live in the Bronx and are interested in being part of our pilot, or want to stay up to date on our progress, please sign up below!"}
            className="about-page__join-our-movement"
          >
            <FlatButton
              className="about-page__sign-up-btn"
              label="sign up"
              containerElement={<Link to="/"/>}
            />
          </TwoColPanel>
        </div>
      </InnerPage>
    )
  }
}

export default AboutPage
