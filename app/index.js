import React from 'react'
import {Router, Route, IndexRoute, browserHistory, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './components/landing-page'
import ErrorPage from './components/error-page'
import SignUpPageContainer from './containers/sign-up-page-container'
import AboutPage from "./components/about-page"
import SignUpSuccessPage from './components/sign-up-success-page'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// HACK: to get the selectedTextColor of the SelectField to not be hot pink
const theme = getMuiTheme({
  palette: {accent1Color: '#40B097'}
})

export default () => (
  <MuiThemeProvider muiTheme={theme}>
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
