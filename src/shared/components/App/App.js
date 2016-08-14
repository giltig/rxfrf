import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import Counter from '../Counter'

import 'normalize.css/normalize.css'
import './globals.css'
import logo from './logo.png'

const websiteDescription =
  'Base project for Functional Reactive Flux '

function App (appState) {
  return (
    <div style={{ padding: '10px' }}>
      {/*
                All of the following will be injected into our page header.
                @see https://github.com/nfl/react-helmet
              */}
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        titleTemplate="Functional Reactive Flux - %s"
        defaultTitle="Functional Reactive Flux"
        meta={[  { name: 'description', content: websiteDescription },]}
        script={[  { src: 'https://cdn.polyfill.io/v2/polyfill.min.js', type: 'text/javascript' },]} />
      <div style={{ textAlign: 'center' }}>
        <h1>Functional Reactive Flux</h1>
        <strong>{websiteDescription}</strong>
      </div>
      <div>
        <Counter count={0} />
      </div>
    </div>
  )
}

export default App
