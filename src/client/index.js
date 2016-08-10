import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { IS_HOT_DEVELOPMENT } from '../shared/config'

// Get the DOM Element that will host our React application.
const container = document.querySelector('#app')

// The following is needed so that we can hot reload our App.
if (IS_HOT_DEVELOPMENT) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js')
}
