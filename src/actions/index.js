export const ALL_INFO = 'ALL_INFO'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

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
