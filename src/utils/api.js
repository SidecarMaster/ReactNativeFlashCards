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
  const { question, answer } = card
  return AsyncStorage.getItem(STORAGE_KEY).then((result)=>{
    const prevState=JSON.parse(result)
    AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      ...prevState,
      [title]:{title, questions:[...prevState[`${title}`].questions, {question, answer}]}
    }))
  })
}

export function removeDeck (key) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}
