import React from 'react'
import { View, Text, Button } from 'react-native'

class DeckDetail extends React.Component {
  render () {
    const { navigation } = this.props

    return (
      <View>
        <Text>DeckDetail</Text>
        <Button
          onPress={()=>navigation.navigate('AddCard')}
          title="Add Card"
        />
        <Button
          onPress={()=>navigation.navigate('Quiz')}
          title="Quiz"
        />
      </View>
    )
  }
}

export { DeckDetail };
