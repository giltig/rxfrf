import { DONT_USE_UNLESS_YOUR_NAME_IS_ACTION_CREATOR } from '../dispatcher'
import Actions from './actions'

export default function dispatch (type, payload = null) {
  if (!Actions.hasOwnProperty(type)) {
    throw new Error(`Tried to dispatch an unknown action. 
                     Action type: ${type}. 
                     Please make sure actions you use are in the
                     list of known actions.`)
  }

  const action = { type, payload }

  DONT_USE_UNLESS_YOUR_NAME_IS_ACTION_CREATOR.next(action)
}
