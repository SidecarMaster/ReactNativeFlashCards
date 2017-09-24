import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { getDecks } from '../utils/api'

class DeckList extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({tintColor})=><Ionicons name='ios-home' size={30} color={tintColor}/>,
    header: null,
  }

  componentDidMount() {
    console.log(this.props.storage)
    getDecks().then((results)=>{
      console.log(results)
    })
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

const connectDeckList = connect(({storage})=>({storage}))(DeckList)

export { connectDeckList };
