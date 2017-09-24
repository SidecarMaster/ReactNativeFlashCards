import React from 'react'
import { View, Text, Button } from 'react-native'

import { Card, CardSection, Title } from '../components/common'

class DeckDetail extends React.Component {
  render () {
    const { navigate, state } = this.props.navigation
    const { title, questions } = state.params.item

    return (
      <Card>
        <CardSection>
          <Title
            title={title}
            subtitle={`${questions.length} ${(questions.length<2)?'card':'cards'}`}
          />
        </CardSection>
        <Button
          onPress={()=>navigate('AddCard')}
          title="Add Card"
        />
        <Button
          onPress={()=>navigate('Quiz')}
          title="Quiz"
        />
    </Card>
    )
  }
}

export { DeckDetail };
