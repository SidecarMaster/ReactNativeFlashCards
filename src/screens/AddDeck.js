import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import { Card, CardSection, Title, Input, Button } from '../components/common'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class AddDeck extends React.Component {
  static navigationOptions = {
    title: 'Add Deck',
    tabBarIcon: ({tintColor})=><FontAwesome name='plus-square' size={30} color={tintColor} />,
  }

  state = {
    deckTitle: ''
  }

  onButtonPress = () => {
    const { deckTitle } = this.state
    const { navigation } = this.props

    // save deck title to Redux store
    this.props.addDeck(deckTitle)

    // save deck title to AsyncStorage
    saveDeckTitle(deckTitle)

    // clear AddDeck form state
    this.setState({deckTitle:''})

    // navigate to Home
    navigation.navigate('Home')

  }

  render () {
    const { deckTitle } = this.state
    return (
      <Card>
        <CardSection>
          <Title title={'What is the title of your new deck?'} />
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

export default connect(({storage})=>({storage}), { addDeck })(AddDeck);
