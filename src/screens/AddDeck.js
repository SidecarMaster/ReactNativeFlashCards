import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import { Card, CardSection, Title, Input, Button } from '../components/common'
import { addDeck } from '../actions'

class AddDeck extends React.Component {
  static navigationOptions = {
    title: 'Add Deck',
    tabBarIcon: ({tintColor})=><FontAwesome name='plus-square' size={30} color={tintColor} />,
    header: null,
  }

  state = {
    deckTitle: ''
  }

  onButtonPress = () => {
    this.props.addDeck(this.state.deckTitle)
  }

  render () {
    const { deckTitle } = this.state
    return (
      <Card>
        <CardSection>
          <Title label={'What is the title of your new deck?'} />
        </CardSection>
        <CardSection>
          <Input
            label={'Deck Title'}
            placeholder={'Deck Title'}
            value={deckTitle}
            onChangeText={(deckTitle)=>this.setState({deckTitle})}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Submit
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const connectAddDeck = connect(null, { addDeck })(AddDeck)

export { connectAddDeck };
