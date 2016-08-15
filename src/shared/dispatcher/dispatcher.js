import { Subject } from '@reactivex/rxjs'
import { Actions } from 'shared/actions'

const _dispatcher = new Subject()

// Hide the subject, so the outer world doesn't abuse it
const dispatcher =
  _dispatcher
    .asObservable()
    .publishReplay(1)
    .refCount()

export const DONT_USE_UNLESS_YOUR_NAME_IS_ACTION_CREATOR = _dispatcher

function buildFilterFunction (args) {
  // Check if has actions
  const hasActions =
    Object.keys(args)
      .some(key => Object.keys(Actions).indexOf(args[key]) !== -1)

  if (!hasActions) {
    throw new Error('Invalid filters provided to dispatcher func')
  }

  return (message) => {
    // If filter args have actions to filter by them
    return (
      Object.keys(args)
        .some(key => args[key] === message.type)
    )
  }
}

// Dispatch full actions (including data)
// We either get a predicate, or a list of actions
export function getAction (...args) {
  let filteredDispatcher

  if (args.length === 0) {
    filteredDispatcher = dispatcher
  } else if (typeof args[0] === 'function') {
    filteredDispatcher =
      dispatcher
        .filter(args[0])
  } else {
    // Sugaring for filtering by actions
    // arguments's values are the actions we would like to filter by
    filteredDispatcher =
      dispatcher
        .filter(buildFilterFunction(args))
  }

  // After we have filtered, the only data that is interesting is under the data key
  return filteredDispatcher
}

// Dispatch only the data from the actions
export default function getPayload (...args) {
  // We usually only need the data prop, so pluck it by
  // default
  return (
    getAction(...args)
      .pluck('payload')
  )
}
