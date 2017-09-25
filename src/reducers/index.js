import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import {
  ALL_INFO,
  ADD_DECK,
  ADD_CARD,
} from '../actions'

function storage(state={}, action) {
  switch (action.type) {
    case ALL_INFO:
      return action.data
    case ADD_DECK:
      return {[action.title]:{title:action.title, questions:[]}}
    case ADD_CARD:
      const { title, card: {question, answer} } = action
      return {[title]:{title, questions:[{question, answer}]}}
    default:
      return state
  }
}

export default combineReducers({
  storage,
  form,
})
