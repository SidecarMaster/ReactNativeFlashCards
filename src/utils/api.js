import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'FLASHCARDS'

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then((result)=>JSON.parse(result))
}

export function getDeck(id) {
  return AsyncStorage.getItem(STORAGE_KEY)
          .then((result)=>{
            const data=JSON.parse(result)
            return data[id]
          })
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]:{title, questions:[]}
  }))
}

export function addCardToDeck(title, card) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]:{title, questions:[{questions:card.question, answer:card.answer}]}
  }))
}
