import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import LandingPage from './landing-page'

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage}/>
  </Router>
)

export default Root
