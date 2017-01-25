import {SET_MESSAGE} from '../actions/types'

const initialState = {
  value: 'loading...'
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}