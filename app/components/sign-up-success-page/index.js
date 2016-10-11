// import React, {Component} from 'react'
// import FlatButton from 'material-ui/FlatButton'
// import InnerPage from './../inner-page'
// import {Link} from 'react-router'
//
// const ifConditions = [
//   'You are arrested and are brought to the precinct in the Bronx',
//   'You cannot reach your loved ones',
//   'Someone you know gets arrested'
// ]
//
// class SignUpSuccessPage extends Component {
//   render () {
//     return (
//       <InnerPage location={this.props.location}>
//         <div className="sign-up-success-page">
// TODO: turn the div below back into a header1 tag later, its changed to a div rn so that google search doesn't get pissed at us
//           <div className="sign-up-success-page__header">Thank you for joining our pilot in the Bronx!</div>
//           <p className="sign-up-success-page__paragraph">
//             <span className="sign-up-success-page__call-number">Call (347) 95 BRONX</span>
//
//             <span className="sign-up-success-page__if-container">
//               <span className="sign-up-success-page__if-circle-container">
//                 <span className="sign-up-success-page__if-circle">
//                   <span className="sign-up-success-page__if-text">
//                     if
//                    </span>
//                  </span>
//               </span>
//
//               {ifConditions.map((condition, i) => (
//                 <span className="sign-up-success-page__if-condition" key={i}> {condition} </span>
//               ))}
//
//               <Link to="/faq" className="sign-up-success-page__faq-link">Have questions? Read our FAQ</Link>
//             </span>
//           </p>
//         </div>
//       </InnerPage>
//     )
//   }
// }
//
// export default SignUpSuccessPage

import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router'

class SignUpSuccessPage extends Component {
  render () {
    // TODO: load content from json
    const {content} = this.props.route

    return (
      <div className='sign-up-success-page'>
        <h1 className='sign-up-success-page__header'>{content.header}</h1>
        <h2 className='sign-up-success-page__subheader'>{content.subheader}</h2>

        <div className='sign-up-success-page__panels'>
          <div className='sign-up-success-page__get-in-touch-panel sign-up-success-page__panel'>
            <h3 className='sign-up-success-page__panel-header'>{content.getInTouch}</h3>
            <a className='sign-up-success-page__link' href='mailto:hello@goodcall.nyc'>hello@goodcall.nyc</a>
          </div>

          <div className='sign-up-success-page__follow-us-panel sign-up-success-page__panel'>
            <h3 className='sign-up-success-page__panel-header'>{content.followUs}</h3>
            <div className='sign-up-success-page__links'>
              <a className='sign-up-success-page__link' href='https://www.facebook.com/goodcallnyc'>
                <img className='sign-up-success-page__link-icon' src='/assets/imgs/facebook_icon.svg' />
              </a>

              <a className='sign-up-success-page__link' href='https://twitter.com/GoodCallNYC'>
                <img className='sign-up-success-page__link-icon' src='/assets/imgs/twitter_icon.svg' />
              </a>

              <a className='sign-up-success-page__link' href='https://www.instagram.com/goodcallnyc'>
                <img className='sign-up-success-page__link-icon' src='/assets/imgs/instagram_icon.svg' />
              </a>
            </div>
          </div>

          <div className='sign-up-success-page__learn-about-us-panel sign-up-success-page__panel'>
            <h3 className='sign-up-success-page__panel-header'>{content.learnAboutUs}</h3>
            <FlatButton
              className='gc-std-btn sign-up-success-page__mission-btn'
              containerElement={<Link to='/about-us'/>}
              label={content.readOurMission}
              backgroundColor='#FDFFF9'
            />
          </div>
        </div>
      </div>
    )
  }
}

SignUpSuccessPage.propTypes = {
  route: PropTypes.object,
  location: PropTypes.object
}

export default SignUpSuccessPage
