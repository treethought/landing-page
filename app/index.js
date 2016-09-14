import React from 'react'
import {Router, Route, browserHistory, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './components/landing-page'
import AboutPage from "./components/about-page" // leaving out for now
import ErrorPage from './components/error-page'

export default () => (
  <MuiThemeProvider>
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={LandingPage}/>
      <Route path="/about-us" component={AboutPage}/>
      <Route path="*" component={ErrorPage} />
    </Router>
  </MuiThemeProvider>
)
