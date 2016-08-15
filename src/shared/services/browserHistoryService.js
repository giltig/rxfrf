
import { Observable } from '@reactivex/rxjs'
import { createHistory, useQueries } from 'history'
import { Actions, dispatch } from 'shared/actions'
import getPayload from 'shared/dispatcher'

const history = useQueries(createHistory)()

const combineLocations = (location, route) => {
  return {location, route}
}

const checkIfDifferentLocation = (location, route) => {
  return !route ||
         location.pathname !== route.path ||
         location.search !== route.search
}

const pushHistory = 
  getPayload(Actions.ROUTE_CHANGED)
    .do(route => {
      const currentLocation = history.getCurrentLocation()
      if (route.path !== currentLocation.pathname && 
          route.query !== currentLocation.query) {
        history.push({ pathname: route.path, 
                       query: route.query })
      }
    })

const notifyHistoryChange = 
  Observable.fromEventPattern(history.listen)
    .merge(Observable.of(history.getCurrentLocation())) // for initial load
    .withLatestFrom(getPayload(Actions.ROUTE_CHANGED)
                    .startWith(null), combineLocations)
    .filter(checkIfDifferentLocation)
    .do(({location, route}) => {              
      dispatch(Actions.ROUTE_CHANGED, {path: location.pathname, 
                                       query: location.query,
                                       search: location.search})      
    })

export default Observable.merge(pushHistory, notifyHistoryChange)
