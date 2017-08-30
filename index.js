import 'babel-polyfill'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
import 'isomorphic-fetch'

import React from 'react'
import bowser from 'bowser'
import { render } from 'react-dom'
import App from './app'

const BrowseHappy = () =>
  <p class='browsehappy'>
    You are using an <strong>outdated</strong> browser. Please <a href='http://browsehappy.com/'>upgrade your browser</a> to improve your experience.
  </p>

const olderIE = bowser.msie && bowser.version < 11

render(
  olderIE ? <BrowseHappy /> : <App className='app' />,
  document.getElementById('root')
)
