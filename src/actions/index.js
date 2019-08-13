export const voteAngular = () => {
  return {
    type: 'VOTE_ANGULAR'
  }
}

export const voteReact = () => {
  return {
    type: 'VOTE_REACT'
  }
}

export const updateState = (payload) => {
  return {
    type: 'UPDATE_STATE',
    payload
  }
}
