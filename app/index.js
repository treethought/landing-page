import React from 'react'
import {Router, Route, IndexRoute, browserHistory, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './components/landing-page'
import ErrorPage from './components/error-page'
import SignUpPageContainer from './containers/sign-up-page-container'
import AboutPage from "./components/about-page"
import SignUpSuccessPage from './components/sign-up-success-page'

export default () => (
  <MuiThemeProvider>
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/">
        <IndexRoute component={LandingPage} />
          <Route path="about-us" component={AboutPage}/>
          <Route path="sign-up">
            <IndexRoute component={SignUpPageContainer} />
            <Route path="success" component={SignUpSuccessPage} />
          </Route>
          <Route path="*" component={ErrorPage} />
      </Route>
    </Router>
  </MuiThemeProvider>
)
