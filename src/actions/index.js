export const ALL_INFO = 'ALL_INFO'
export const ADD_DECK = 'ADD_DECK'

export function allInfo(data) {
  return {
    type: ALL_INFO,
    payload: data
  }
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    payload: title,
  }
}
