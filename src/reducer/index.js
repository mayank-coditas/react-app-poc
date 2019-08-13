const initialState = {
  angular: 0,
  react: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'VOTE_ANGULAR':
      return Object.assign({}, state, {
        angular: state.angular + 1
      })
    case 'VOTE_REACT':
      return Object.assign({}, state, {
        react: state.react + 1
      })
    case 'UPDATE_STATE':
      return Object.assign({}, action.payload)
    default:
      return state
  }
}
