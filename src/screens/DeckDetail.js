import React from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

// Don't forget to export * in the index.js file in common
import { BackButton, Card, CardSection, Title } from '../components/common'
import { headerColor } from '../utils/colors'

class DeckDetail extends React.Component {

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

const connectDeckDetail = connect(({storage})=>({storage}))(DeckDetail)

export { connectDeckDetail };
