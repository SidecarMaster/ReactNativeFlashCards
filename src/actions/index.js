import {
  ALL_INFO,
  ADD_DECK,
  ADD_CARD,
  DELETE_DECK,
} from './types'

export * from './types'

export const allInfo = data => ({
  type: ALL_INFO,
  payload: data
})

export const addDeck = title => ({
  type: ADD_DECK,
  payload: title,
})

export const addCard = (title, card) => ({
  type: ADD_CARD,
  payload: {title, card}
})

export const deleteDeck = title => ({
  type: DELETE_DECK,
  payload: title
})
