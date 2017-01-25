import {SET_MESSAGE} from './types'

export default (message, delay) =>
  dispatch =>
    setTimeout(() => dispatch({type: SET_MESSAGE, value: message}), delay)
