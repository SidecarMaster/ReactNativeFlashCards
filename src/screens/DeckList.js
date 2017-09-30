import React from 'react'
import { View, Text, Button, AsyncStorage, FlatList, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { EvilIcons } from '@expo/vector-icons'
import _ from 'lodash'

import { Card, Title, CardSection } from '../components/common'
import { allInfo } from '../actions'
import { getDecks } from '../utils/api'

class DeckList extends React.Component {

  componentDidMount() {
    const { allInfo } = this.props
    getDecks().then((data)=>{
      allInfo(data)
    })
  }

  renderItem = ({ item : { title, questions } }) => {
    const { navigate } = this.props.navigation

    return (
      <TouchableHighlight onPress={()=>navigate('DeckDetail', {title})}>
        <View>
          <Card>
            <CardSection>
              <EvilIcons name='archive' size={60} color='#0b68df' />
              <Title
                title={title}
                subtitle={`${questions.length} ${(questions.length<2)?'card':'cards'}`}
              />
            </CardSection>
          </Card>
        </View>
      </TouchableHighlight>

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
