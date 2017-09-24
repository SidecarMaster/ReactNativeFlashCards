import { combineReducers } from 'redux'

import {
  ALL_INFO,
  ADD_DECK,
} from '../actions'

function storage(state={}, action) {
  switch (action.type) {
    case ALL_INFO:
      return action.payload
    case ADD_DECK:
      return {[action.payload]:{title:action.payload, questions:[]}}
    default:
      return state
  }
}

export default combineReducers({
  storage
})
