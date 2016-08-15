import {Observable} from '@reactivex/rxjs'
import counterStore from './counterStore'
import routerStore from './routerStore'

// You can enter more stores here
export default Observable.combineLatest(counterStore, 
                                        routerStore,
                                        (counterStore, 
                                         routerStore) => {
                                          return Object.assign({}, 
                                                               counterStore,
                                                               routerStore)
                                        })
