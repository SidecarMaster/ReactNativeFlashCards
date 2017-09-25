import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { FontAwesome } from '@expo/vector-icons'

import reducer from './src/reducers'
import { connectDeckList, connectAddDeck, connectDeckDetail, Quiz, connectAddCard } from './src/screens'

const Home = TabNavigator({
  DeckList: {
    screen: connectDeckList,
  },
  AddDeck: {
    screen: connectAddDeck,
    navigationOptions: {
      title: 'Add Deck',
      tabBarIcon: ({tintColor})=><FontAwesome name='plus-square' size={30} color={tintColor} />,
    }
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
    screen: connectDeckDetail,
  },
  AddCard: {
    screen: connectAddCard,
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(ReduxPromise, ReduxThunk),
))

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
