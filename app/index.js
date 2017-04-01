import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import content from './content'
import locale from './services/locale'
import {
  LandingPage, ErrorPage, SignUpPageContainer, AboutPage, SignUpSuccessPage,
  PrivacyPolicyPage, FaqPage, InnerPage, TermsAndConditionsPage
} from './components'
import { sendMessageWithNextUrl } from './services/utils'
import { triggerEvent, trackPageView } from './services/ga'

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
    triggerEvent(`language-switched-to-${newLocale}`)()
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
              <IndexRoute component={SignUpPageContainer} content={content.signUpPage} locale={locale} />
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
