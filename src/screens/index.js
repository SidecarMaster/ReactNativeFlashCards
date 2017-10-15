import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

import { connectDeckList } from './DeckList'
import { connectAddDeck } from './AddDeck'
import { connectDeckDetail } from './DeckDetail'
import { Quiz } from './Quiz'
import { connectAddCard } from './AddCard'
import { BackButton } from '../components/common'
import { headerColor } from '../utils/colors'

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
      headerLeft: <BackButton navigation={navigation}/>
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

export const Router = StackNavigator({
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
      headerLeft: <BackButton navigation={navigation}/>
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
      headerLeft: <BackButton navigation={navigation}/>
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
      headerLeft: <BackButton navigation={navigation}/>
    })
  },
},{
  cardStyle: {
    backgroundColor: '#10131c'
  },

})
