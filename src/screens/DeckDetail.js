import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { Card, CardSection, Title } from '../components/common'

class DeckDetail extends React.Component {
  static navigationOptions = {
    title: 'Deck Detail',
  }

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
