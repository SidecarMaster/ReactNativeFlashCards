import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableHighlight } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

import reducer from './src/reducers'
import { connectDeckList, connectAddDeck, connectDeckDetail, Quiz, connectAddCard } from './src/screens'
import { BackButton } from './src/components/common'
import { headerColor } from './src/utils/colors'
import { setLocalNotification } from './src/utils/helpers'

const SCREEN_HEIGHT = Dimensions.get('window').height
const tabBarIconSize = 40

const Home = TabNavigator({
  DeckList: {
    screen: connectDeckList,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({tintColor})=><Ionicons name='ios-home' size={tabBarIconSize} color={tintColor}/>,
      headerStyle: {
        backgroundColor: headerColor,
      },
      headerTitleStyle: {
        color: 'white'
      },
    }
  },
  AddDeck: {
    screen: connectAddDeck,
    navigationOptions: ({navigation}) => ({
      title: 'Add Deck',
      tabBarIcon: ({tintColor})=><Ionicons name='ios-add' size={tabBarIconSize} color={tintColor} />,
      headerStyle: {
        backgroundColor: headerColor,
      },
      headerTitleStyle: {
        color: 'white'
      },
      // headerLeft: <BackButton navigation={navigation}/>,
    })
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
    navigationOptions: ({navigation}) => ({
      title: 'Deck Detail',
      headerStyle: {
        backgroundColor: headerColor,
      },
      headerTitleStyle: {
        color: 'white'
      },
      // headerLeft: <BackButton navigation={navigation}/>
    })
  },
  AddCard: {
    screen: connectAddCard,
    navigationOptions: ({navigation}) => ({
      title: 'Add Card',
      headerStyle: {
        backgroundColor: headerColor,
      },
      headerTitleStyle: {
        color: 'white'
      },
      // headerLeft: <BackButton navigation={navigation}/>
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: 'Quiz',
      headerStyle: {
        backgroundColor: headerColor,
      },
      headerTitleStyle: {
        color: 'white'
      },
      // headerLeft: <BackButton navigation={navigation}/>
    })
  },
},{
  cardStyle: {
    backgroundColor: '#10131c'
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
  componentDidMount(){
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <AppStatusBar backgroundColor={headerColor} barStyle="light-content" />
          <Stacks />
        </View>
      </Provider>
    )
  }
}
