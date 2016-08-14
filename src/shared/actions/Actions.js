import keyMirror from 'key-mirror'

const Actions = keyMirror({  
  ROUTE_CHANGED: null, // {path: string, query: string}
})

export default Actions
