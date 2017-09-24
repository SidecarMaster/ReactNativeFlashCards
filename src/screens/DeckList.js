import React from 'react'
import { View, Text, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

class DeckList extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({tintColor})=><Ionicons name='ios-home' size={30} color={tintColor}/>,
    header: null,
  }

  render () {
    const { navigation } = this.props

    return (
      <View>
        <Text>DeckList</Text>
        <Button
          onPress={()=>navigation.navigate('DeckDetail')}
          title="Go to Deck Detail"
        />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//
// })

export { DeckList };
