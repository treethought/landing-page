import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './components/landing-page'
import ErrorPage from './components/error-page'
import SignUpPageContainer from './containers/sign-up-page-container'
import AboutPage from './components/about-page'
import SignUpSuccessPage from './components/sign-up-success-page'
import PrivacyPolicyPage from './components/privacy-policy-page'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import content from './content'
import currentLanguage from './services/current-language'
import InnerPage from './components/inner-page'

// HACK: to get the selectedTextColor of the SelectField to not be hot pink
const theme = getMuiTheme({
  palette: {accent1Color: '#40B097'}
})

// set up copy
// check cookie for translation shit

class App extends Component {
  constructor () {
    super()
    this.state = {content: content[currentLanguage.get()]}
  }

  changeLanguage (language) {
    currentLanguage.set(language)
    this.setState({
      content: content[currentLanguage.get()]
    })
  }

  render () {
    const {content} = this.state

    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
          <Route path="/" component={InnerPage} content={content.innerPage}>
            <IndexRoute component={LandingPage} content={content.landingPage} />
            <Route path="about-us" component={AboutPage} content={content.aboutPage} />
            <Route path="sign-up">
              <IndexRoute component={SignUpPageContainer} content={content.signUpPage}/>
              <Route path="success" component={SignUpSuccessPage} content={content.signUpSuccessPage} />
            </Route>
            <Route path="privacy-policy" component={PrivacyPolicyPage} content={content.privacyPolicyPage} />
            <Route path="*" component={ErrorPage} content={content.errorPage} />
          </Route>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
