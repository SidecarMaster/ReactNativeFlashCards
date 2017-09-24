import React from 'react'
import { View, Text, Button, AsyncStorage, FlatList, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import _ from 'lodash'

import { Card, CardSection, Title } from '../components/common'
import { allInfo } from '../actions'
import { getDecks } from '../utils/api'

class DeckList extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({tintColor})=><Ionicons name='ios-home' size={30} color={tintColor}/>,
  }

  componentDidMount() {
    const { allInfo } = this.props
    getDecks().then((data)=>{
      allInfo(data)
    })
  }

  renderItem = ({item}) => {
    const { navigation } = this.props
    return (
      <Card>
        <TouchableHighlight onPress={()=>navigation.navigate('DeckDetail', {item})}>
          <View>
            <CardSection>
              <Title
                title={item.title}
                subtitle={`${item.questions.length} ${(item.questions.length<2)?'card':'cards'}`}
              />
            </CardSection>
          </View>
        </TouchableHighlight>
      </Card>
    )
  }

  render () {
    const { storage } = this.props
    return (
      <View>
        <FlatList
          data={_.map(storage)}
          renderItem={this.renderItem}
          keyExtractor={(item)=>item.title}
          />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//
// })

const connectDeckList = connect(({storage})=>({storage}), {allInfo})(DeckList)

export { connectDeckList };
