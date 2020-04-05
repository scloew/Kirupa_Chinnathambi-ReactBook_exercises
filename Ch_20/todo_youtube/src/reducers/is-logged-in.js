const loggedReducer = (state, action) => {
  if (state === undefined) {
    state = {
      logged: false
    }
  }
  var loggedIn = state.logged
  switch (action.type) {
    case 'SIGN_IN': return { logged: !loggedIn }
    default: return state
  }
}

export default loggedReducer;