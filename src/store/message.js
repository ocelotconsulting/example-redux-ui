import {SET_MESSAGE} from '../actions/types'

const initialState = Object.freeze({
  value: 'loading...'
})

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
