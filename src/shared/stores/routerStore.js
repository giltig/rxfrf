import { Observable } from '@reactivex/rxjs'
import { Actions, dispatch } from 'shared/actions'
import getPayload from 'shared/dispatcher'
import combineLatestObj from 'shared/utils/combineLatestObj'

/* ========================== helpers ========================================= */

const extractRouteAsURL = (route) => {
  return route.path + (route.search || '')
}

/* ========================== state ========================================= */
const route =
  getPayload(Actions.ROUTE_CHANGED)
    .map(extractRouteAsURL)
    .startWith('')

export default combineLatestObj({route})
