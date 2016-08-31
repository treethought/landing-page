import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './landing-page'

export default () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={LandingPage}/>
    </Router>
  </MuiThemeProvider>
)
