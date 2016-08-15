import React from 'react'
import render from '../htmlPage/render'
import { DISABLE_SSR } from '../config'
import { IS_DEVELOPMENT } from '../../shared/config'
import stores from 'shared/stores'
import App from 'shared/components/App'

/**
 * An express middleware that is capabable of doing React server side rendering.
 */
function universalReactAppMiddleware (request, response) {
  if (DISABLE_SSR) {
    if (IS_DEVELOPMENT) {
      console.log('==> 🐌  Handling react route without SSR')
    }
    // SSR is disabled so we will just return an empty html page and will
    // rely on the client to populate the initial react application state.
    const html = render()
    
    response.status(200).send(html)
    return
  }

  // Our way of server side rendering - TBD
  stores
    .debounceTime(16)
    .first()
    .subscribe((appState) => {
      // Override the route from the request
      appState.route = request.originalUrl

      const html = render(<App {...appState} />, appState)
      response.status(200).send(html)
    })
}

export default universalReactAppMiddleware
