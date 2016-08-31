import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import LandingPage from './landing-page'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage}/>
  </Router>
)
