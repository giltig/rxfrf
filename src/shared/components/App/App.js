import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import match, { changeRoute } from 'shared/utils/routing'
import Counter from '../Counter'
import About from '../About'

import 'normalize.css/normalize.css'
import './globals.css'
import logo from './logo.png'

const websiteDescription =
  'Base project for Functional Reactive Flux '

class App extends Component {
  getChildContext () {
    return {route: this.props.route};
  }

  render () {
    const { count, decreaseCount, increaseCount, ...other } = this.props

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
        <nav>
          <button onClick={() => changeRoute('/counter') }>
            Counter
          </button>
          <button onClick={() => changeRoute('/about') }>
            About
          </button>
        </nav>
        <div>        
          { match('/counter', <Counter count={count}
                                       decreaseCount={decreaseCount}
                                       increaseCount={increaseCount} />) }
          {
            // optional params, use ()
          }
          { match('/about(/page/:pageId)', <About />) }
        </div>
      </div>
    )
  }  
}

App.childContextTypes = {
  route: React.PropTypes.string
};

export default App
