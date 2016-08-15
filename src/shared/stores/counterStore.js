import {Observable} from '@reactivex/rxjs'
import getPayload from 'shared/dispatcher'
import {Actions, dispatch} from 'shared/actions'
import {add} from 'ramda'
import combineLatestObj from 'shared/utils/combineLatestObj'

/* ========================== state ========================================= */

const increase =
  getPayload(Actions.COUNTER_INCREASED)
    .mapTo(1)

const decrease =
  getPayload(Actions.COUNTER_DECREASED)
    .mapTo(-1)

export const count =
  Observable
    .merge(increase, decrease)
    .scan(add)
    .startWith(0)

/* ========================== handlers ====================================== */

export const increaseCount =
  Observable.of(() => {
    dispatch(Actions.COUNTER_INCREASED)
  })

export const decreaseCount =
  Observable.of(() => {
    dispatch(Actions.COUNTER_DECREASED)
  })

/* ======================== all together ==================================== */

export default
  Observable
    .combineLatestObj({count, increaseCount, decreaseCount})
