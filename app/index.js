import React from 'react'
import {Router, Route, IndexRoute, browserHistory, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './components/landing-page'
import ErrorPage from './components/error-page'
import SignUpPageContainer from './containers/sign-up-page-container'
import AboutPage from './components/about-page'
import SignUpSuccessPage from './components/sign-up-success-page'
import PrivacyPolicyPage from './components/privacy-policy-page'
import LoginPageContainer from './containers/login-page-container'
import FaqPage from './components/faq-page'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// HACK: to get the selectedTextColor of the SelectField to not be hot pink
const theme = getMuiTheme({
  palette: {accent1Color: '#40B097'}
})

const sendMessageWithNextUrl = (prevState, nextState, replace, callback) => {
  // checks if we're in an iframe or not
  if (window.parent !== window) {
    const nextUrl = `https://goodcall.nyc${nextState.location.pathname}`
    window.parent.postMessage(nextUrl, 'https://labs.robinhood.org')
  } else {
    callback()
  }
}

export default () => (
  <MuiThemeProvider muiTheme={theme}>
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" onChange={sendMessageWithNextUrl}>
        <IndexRoute component={LandingPage} />
        <Route path="about-us" component={AboutPage}/>
        <Route path="sign-up">
          <IndexRoute component={SignUpPageContainer} />
          <Route path="success" component={SignUpSuccessPage} />
        </Route>
        <Route path="privacy-policy" component={PrivacyPolicyPage} />
        <Route path="login" component={LoginPageContainer} />
        <Route path="faq" component={FaqPage} />
        <Route path="*" component={ErrorPage} />
      </Route>
    </Router>
  </MuiThemeProvider>
)
