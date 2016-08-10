import keyMirror from 'key-mirror'

const Actions = keyMirror({
  GAME_RESTARTED: null, // {}
  GAME_STARTED: null, // {}
  PATTERN_ADDED: null, // {colors:[], speed: number}
  PATTERN_TIMEDOUT: null, // {}
  PATTERN_ACTIVATED: null, // {id:number, colors:[]}
  COLOR_TAPPED: null, // {userId: number, color: string}
  STATS_UPDATED: null, // {registeredUsers: []], failedUsersCount: number, timedoutUsersCount: number, successfulUsers: []}
  USER_JOINED: null, // {name: string, nickname: string}
  USER_REGISTERED: null, // {id: number, name: string, nickname: string}
  USER_REGISTRATION_FAILED: null, // {name: string, nickname: string, error: string}
  USER_TIMEDOUT: null, // {userId: number, patternId: number}
  USER_FAILED: null, // {userId: number, patternId: number}
  USER_SUCCEEDED: null, // {userId: number, patternId: number, enteredPattern: []}
  ROUTE_CHANGED: null, // {path: string, query: string}
})

export default Actions
