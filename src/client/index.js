import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { IS_HOT_DEVELOPMENT,  DISABLE_SSR } from '../shared/config'
import services from 'shared/services'
import stores from 'shared/stores'
import App from 'shared/components/App'

// Get the DOM Element that will host our React application.
const container = document.querySelector('#app')

// The following is needed so that we can hot reload our App.
if (IS_HOT_DEVELOPMENT) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js')
}

services.subscribe(() => {}, ::console.log, ::console.log)

stores
  .debounceTime(16)
  // Skip 1 bcs of serverside rendering, or not if disabled
  // handlers are breaking bcs of ssr, until solved just don't skip
  //.skip((DISABLE_SSR === 'true' ? 0 : 1))
  // Get app state injected by ssr
  .startWith(window && window.APP_STATE) 
  .subscribe((appState) => {
    console.log('hooray')

    render(
      <App {...appState} />,
      container
    )
  })
