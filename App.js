import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import { Constants } from 'expo'

import { Router } from './src/screens'
import reducer from './src/reducers'
import { setLocalNotification } from './src/utils/helpers'
import { headerColor } from './src/utils/colors'

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
          <Router />
        </View>
      </Provider>
    )
  }
}
