import { getAction } from 'shared/dispatcher'

// Get all actions, no filtering
// To do, more specific logging by error, warning etc.
// Could be achieved by having a convention for error/warning actions
const logger = 
  getAction()
    .do(::console.log)

export default logger