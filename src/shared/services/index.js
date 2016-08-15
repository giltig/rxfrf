import {Observable} from '@reactivex/rxjs'

// Import services here
import browserHistoryService from './browserHistoryService'
import loggerService from './loggerService'

// Add services to the merge
export default Observable.merge(browserHistoryService, loggerService)