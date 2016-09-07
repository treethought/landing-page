import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './landing-page'
import HowItWorksPage from './how-it-works-page'
import AboutPage from "./about-page"

export default () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={LandingPage}/>
      <Route path="/how-it-works" component={HowItWorksPage}/>
      <Route path="/about-us" component={AboutPage}/>
    </Router>
  </MuiThemeProvider>
)
