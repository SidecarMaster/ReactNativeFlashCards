import React from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

// Don't forget to export * in the index.js file in common
import { BackButton, Card, CardSection, Title } from '../components/common'
import { headerColor } from '../utils/colors'
import { removeDeck } from '../utils/api'
import { deleteDeck } from '../actions'

class DeckDetail extends React.Component {
  // several things that you need to take notice here
  // first, you must use the arrow function format so that this.props inside refers to the outer scope
  //    if you use deleteDeck(){...}, then this.props refers to the function deleteDeck
  // second, you cannot pass goBack and title from onPress attribute inside Button.
  //    the Button will pass onPress a synthetic event.
  deleteDeck = () => {
    const { goBack, state: { params: { title } } } = this.props.navigation
    // remove deck from AsyncStorage
    removeDeck(title)
    // remove deck from redux store
    this.props.deleteDeck(title)
    // Go back
    goBack()
  }

  render () {
    const { navigate, state: { params: { title } } } = this.props.navigation
    // After you remove deck from redux store, the goBack function will go back from DeckDetail to DeckList
    // However your this.props.storage[`${title}`] is void at this time thus 'cannot read property questions of undefined'
    // Below is the solution. It's either there, or an empty array
    const questions = this.props.storage[`${title}`] && this.props.storage[`${title}`].questions || []

    return (
      <Card>
        <CardSection>
          <Title
            title={title}
            subtitle={`${questions.length } ${(questions.length<2)?'card':'cards'}`}
          />
        </CardSection>
        <Button
          onPress={()=>navigate('AddCard', {title})}
          title="Add Card"
        />
        <Button
          onPress={()=>navigate('Quiz', {title, questions})}
          title="Quiz"
        />
        <Button
          onPress={this.deleteDeck}
          title="Delete Deck"
        />
      </Card>
    )
  }
}

const connectDeckDetail = connect(({storage})=>({storage}), {deleteDeck})(DeckDetail)

export { connectDeckDetail };
