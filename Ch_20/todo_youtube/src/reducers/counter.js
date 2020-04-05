const counterReducer = (state, action) => {
  if (state === undefined) {
    state = {
      count: 0
    }
  }

  var count = state.count

  switch (action.type) {
    case 'INCREMENT': return { count: count + action.payload }
    case 'DECREMENT': return { count: count - 1 }
    default: return state;
  }
}

export default counterReducer;