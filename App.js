import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

import reducer from './src/reducers'
import { connectDeckList, connectAddDeck, connectDeckDetail, Quiz, connectAddCard } from './src/screens'

const SCREEN_HEIGHT = Dimensions.get('window').height
const tabBarIconSize = 40

const Home = TabNavigator({
  DeckList: {
    screen: connectDeckList,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({tintColor})=><Ionicons name='ios-home' size={tabBarIconSize} color={tintColor}/>,
      headerStyle: {
        backgroundColor: '#010101',
      },
      headerTitleStyle: {
        color: 'white'
      },
    }
  },
  AddDeck: {
    screen: connectAddDeck,
    navigationOptions: {
      title: 'Add Deck',
      tabBarIcon: ({tintColor})=><Ionicons name='ios-add' size={tabBarIconSize} color={tintColor} />,
      headerStyle: {
        backgroundColor: '#010101',
      },
      headerTitleStyle: {
        color: 'white'
      },
    }
  }
},{
  tabBarOptions: {
    activeTintColor: '#01bdfa',
    inactiveTintColor: '#6d8496',
    style: {
      backgroundColor: '#151c24',
      height: SCREEN_HEIGHT*0.11,
      paddingTop: 10,
      paddingBottom: 6,
    },
    labelStyle: {
      fontSize: 12
    }
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
},{
  cardStyle: {
    backgroundColor: '#10131c'
  }
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
          <AppStatusBar backgroundColor={'#010101'} barStyle="light-content" />
          <Stacks />
        </View>
      </Provider>
    )
  }
}
