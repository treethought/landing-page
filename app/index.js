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
import FaqPage from './components/faq-page'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import content from './content'
import locale from './services/locale'
import InnerPage from './components/inner-page'

// HACK: to get the selectedTextColor of the SelectField to not be hot pink
const theme = getMuiTheme({palette: {accent1Color: '#40B097'}})

const sendMessageWithNextUrl = (prevState, nextState, replace, callback) => {
  // checks if we're in an iframe or not
  if (window.parent !== window) {
    const nextUrl = `https://goodcall.nyc${nextState.location.pathname}`
    window.parent.postMessage(nextUrl, 'https://labs.robinhood.org')
  } else {
    callback()
  }
}

class App extends Component {
  constructor () {
    super()
    let currentLocale = locale.get()
    this.state = {locale: currentLocale, content: content[currentLocale]}
  }

  setLocale (newLocale) {
    return () => {
      locale.set(newLocale)
      window.location.reload()
    }
  }

  render () {
    const {content} = this.state

    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
          <Route path='/' component={InnerPage} content={content.innerPage} locale={this.state.locale} setLocale={this.setLocale.bind(this)} onChange={sendMessageWithNextUrl}>
            <IndexRoute component={LandingPage} content={content.landingPage} />
            <Route path='about-us' component={AboutPage} content={content.aboutPage} />
            <Route path='sign-up'>
              <IndexRoute component={SignUpPageContainer} content={content.signUpPage}/>
              <Route path='success' component={SignUpSuccessPage} content={content.signUpSuccessPage} />
            </Route>
            <Route path='privacy-policy' component={PrivacyPolicyPage} content={content.privacyPolicyPage} />
            <Route path='faq' component={FaqPage} content={content.faqPage} />
            <Route path='*' component={ErrorPage} content={content.errorPage} />
          </Route>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
