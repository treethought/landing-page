import React from 'react'
import {Router, Route, browserHistory, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './landing-page'
// import AboutPage from "./about-page" // leaving out for now

export default () => (
  <MuiThemeProvider>
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={LandingPage}/>
      {/*<Route path="/about-us" component={AboutPage}/>*/}
    </Router>
  </MuiThemeProvider>
)
