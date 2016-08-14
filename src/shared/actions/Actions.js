import keyMirror from 'key-mirror'

const Actions = keyMirror({  
  ROUTE_CHANGED: null, // {path: string, query: string}
  COUNTER_INCREASED: null,
  COUNTER_DECREASED: null
})

export default Actions
