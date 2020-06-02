function videos(state = {}, action) {
  switch (action.type) {
    case 'SET_SUGGESTION_LIST': {
      debugger
      return {...state, ...action.payload};
    }
    case 'SET_CATEGORY_LIST': {
      debugger
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default videos;
