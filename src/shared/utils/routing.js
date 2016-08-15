import React, {Component} from 'react'
import routeParser from 'route-parser'
import urlParser from 'url-parse'
import { Actions } from 'shared/actions'
import { dispatch } from 'shared/actions'

export function changeRoute(route) {
  const url = urlParser(route)
  dispatch(Actions.ROUTE_CHANGED, {path: url.pathname, query: url.query  })
}

export default function match (routes, component) {
  let matchers;

  if (Array.isArray(routes)) {
    matchers = routes.map(routeParser)
  } else {
    matchers = [routeParser(routes)]
  }

  const routeComponent = (props, context) => {
    const matcher = matchers.find((matcher) => matcher.match(context.route))

    if (matcher) {
      // match contains params
      return React.cloneElement(component, matcher.match(context.route))
    }

    return null
  }

  routeComponent.contextTypes = {
    route: React.PropTypes.string
  }

  return React.createElement(routeComponent)
}