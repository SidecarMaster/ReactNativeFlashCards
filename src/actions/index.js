import {
  ALL_INFO,
  ADD_DECK,
  ADD_CARD,
  DELETE_DECK,
} from './types'

export * from './types'

export function allInfo(data) {
  return {
    type: ALL_INFO,
    data
  }
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card,
  }
}

export function deleteDeck(title) {
  return {
    type: DELETE_DECK,
    title
  }
}
