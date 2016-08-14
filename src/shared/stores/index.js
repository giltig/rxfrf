import {Observable} from '@reactivex/rxjs'

import counter from './counter'

// You can enter more stores here
export default
  Observable.combineLatest(
    counter,
      (counter) => {
        return
          Object.assign({}, counter)
      }
  )



