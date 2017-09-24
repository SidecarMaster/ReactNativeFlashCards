import { combineReducers } from 'redux'

import {
  ADD_DECK
} from '../actions'

function storage(state={}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {[action.payload]:{title:action.payload, questions:[]}}
    default:
      return state
  }
}

export default combineReducers({
  storage
})
