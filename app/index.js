import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import content from './content'
import locale from './services/locale'
import {
  AboutPage, ErrorPage, FaqPage, InnerPage, LandingPage, PrivacyPolicyPage,
  SignUpPage, SignUpSuccessPage, TermsAndConditionsPage
} from './components'
import { sendMessageWithNextUrl } from './services/utils'
import { trackPageView } from './services/ga'

// HACK: to get the selectedTextColor of the SelectField to not be hot pink
const theme = getMuiTheme({ palette: { accent1Color: '#40B097' } })

browserHistory.listen(location => { trackPageView(location.pathname) })

class App extends Component {
  constructor () {
    super()
    let currentLocale = locale.get()
    this.state = { locale: currentLocale, content: content[currentLocale] }
  }

  toggleLocale () {
    const newLocale = this.state.locale === 'en' ? 'es' : 'en'
    locale.set(newLocale)
    window.location.reload()
  }

  render () {
    const { content, locale } = this.state

    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
          <Route path='/' component={InnerPage} content={content.innerPage} toggleLocale={this.toggleLocale.bind(this)} onChange={sendMessageWithNextUrl}>
            <IndexRoute component={LandingPage} content={content.landingPage} />
            <Route path='about-us' component={AboutPage} content={content.aboutPage} />
            <Route path='sign-up'>
              <IndexRoute component={SignUpPage} content={content.signUpPage} />
              {/* <Route path='/user' component={UserSignUpContainer} /> */}
              {/* <Route path='/contact' component={ContactSignUpContainer} /> */}
              <Route path='/success' component={SignUpSuccessPage} />
            </Route>
            <Route path='privacy-policy' component={PrivacyPolicyPage} content={content.privacyPolicyPage} />
            <Route path='faq' component={FaqPage} content={content.faqPage} />
            <Route path='terms-and-conditions' component={TermsAndConditionsPage} content={content.termsAndConditionsPage} />
            <Route path='*' component={ErrorPage} content={content.errorPage} />
          </Route>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
