import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
import 'isomorphic-fetch'

import React from 'react'
import { render } from 'react-dom'
import App from './app'
import css from './app/index.css'

render(
  <App />,
  document.getElementById('app')
)
