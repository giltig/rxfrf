import React from 'react'
import render from '../htmlPage/render'
import { DISABLE_SSR } from '../config'
import { IS_DEVELOPMENT } from '../../shared/config'

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
  stores.first().subscribe((appState) => {
      // Override the route from the request
      appState.route.path = request.path
      appState.route.query = request.query

      const html = render({rootElement: <App {...appState} />, initialState: appState})
      response.status(200).send(html)
    }, ::console.log)
  }
}

export default universalReactAppMiddleware
