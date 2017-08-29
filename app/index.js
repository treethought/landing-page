import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import content from './content'
import locale from './services/locale'
import {
  AboutPageContainer, ContactSignUpPageContainer, UserSignUpPageContainer
} from './containers'
import {
  ErrorPage, FaqPage, InnerPage, LandingPage, PrivacyPolicyPage,
  SignUpPage, SignUpSuccessPage, TermsAndConditionsPage
} from './components'
import { sendMessageWithNextUrl } from './services/utils'
import { trackPageView } from './services/ga'

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
    const { content } = this.state

    return (
      <MuiThemeProvider>
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
          <Route path='/' component={InnerPage} content={content.innerPage} toggleLocale={this.toggleLocale.bind(this)} onChange={sendMessageWithNextUrl}>
            <IndexRoute component={LandingPage} content={content.landingPage} />
            <Route path='about-us' component={AboutPageContainer} content={content.aboutPage} />
            <Route path='sign-up'>
              <IndexRoute component={SignUpPage} content={content.signUpPage} />
              <Route path='user' component={UserSignUpPageContainer} content={content.userSignUpPage} />
              <Route path='contact' component={ContactSignUpPageContainer} content={content.contactSignUpPage} />
              <Route path='success' component={SignUpSuccessPage} content={content.signUpSuccessPage} />
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
