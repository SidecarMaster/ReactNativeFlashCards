import React from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'


import { Card, CardSection, Title, BackButton } from '../components/common'
import { headerColor } from '../utils/colors'

class DeckDetail extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Deck Detail',
    headerStyle: {
      backgroundColor: headerColor,
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerLeft: <BackButton navigation={navigation} path={'Home'} />
  })

  render () {
    const { navigate, state: { params: { title } } } = this.props.navigation
    const { questions } = this.props.storage[`${title}`]

    return (
      <Card>
        <CardSection>
          <Title
            title={title}
            subtitle={`${questions.length} ${(questions.length<2)?'card':'cards'}`}
          />
        </CardSection>
        <Button
          onPress={()=>navigate('AddCard', {title})}
          title="Add Card"
        />
        <Button
          onPress={()=>navigate('Quiz', {title, questions})}
          title="Quiz"
        />
      </Card>
    )
  }
}

// const BackButton = ({navigation, path}) => {
//   return (
//     <TouchableHighlight onPress={()=>navigation.goBack()}>
//       <Ionicons name='ios-arrow-back' size={30} color='#8091a5' />
//     </TouchableHighlight>
//   )
// }

const connectDeckDetail = connect(({storage})=>({storage}))(DeckDetail)

export { connectDeckDetail };
