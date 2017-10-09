import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import {
  ALL_INFO,
  ADD_DECK,
  ADD_CARD,
  DELETE_DECK,
} from '../actions'

function storage(state={}, action) {
  switch (action.type) {
    case ALL_INFO:
      return action.data
    case ADD_DECK:
      return {...state,
        [action.title]:{title:action.title, questions:[]}
      }
    case ADD_CARD:
      const { title, card: {question, answer} } = action
      return {...state,
        [title]:{title, questions:[...state[`${title}`].questions, {question, answer}]}
      }
    case DELETE_DECK:
      let newState={...state}
      delete newState[`${action.title}`]
      return newState
    default:
      return state
  }
}

export default combineReducers({
  storage,
  form,
})
