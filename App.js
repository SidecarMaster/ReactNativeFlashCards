import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { DeckList, DeckDetail, connectAddDeck, Quiz, AddCard } from './src/screens'

const Home = TabNavigator({
  DeckList: {
    screen: DeckList,
  },
  AddDeck: {
    screen: connectAddDeck,
  }
},{
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
})

const Stacks = StackNavigator({
  Home: {
    screen: Home,
  },
  DeckDetail: {
    screen: DeckDetail,
  },
  AddCard: {
    screen: AddCard,
  },
  Quiz: {
    screen: Quiz,
  },
})

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <AppStatusBar backgroundColor={'black'} barStyle="light-content" />
          <Stacks />
        </View>
      </Provider>
    )
  }
}
