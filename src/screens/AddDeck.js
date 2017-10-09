import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'

import { Card, CardSection, Form, Title, Input, Button } from '../components/common'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class AddDeck extends React.Component {
  // When you use Redux form, your class property will be overwritten. You must put navigationOptions in TabNavigator.

  onButtonPress = (values) => {
    const { goBack } = this.props.navigation

    // save deck title to Redux store
    this.props.addDeck(values.deckTitle)

    // save deck title to AsyncStorage
    saveDeckTitle(values.deckTitle)

    // manually reset redux-form, maybe because this addDeck action is asynchronous
    this.props.dispatch(reset('addDeckForm'))

    // goBack()
    goBack()

  }

  renderDeckTitle = (field) => {
    const { touched, error } = field.meta
    const errorAttr = touched && error ? true: false

    return (
      <View>
        <Input
          type='text'
          label={field.label}
          error={errorAttr}
          placeholder={field.placeholder}
          onChangeText={field.input.onChange}
          {...field.input}
        />
        <Text>
          { touched ? error : '' }
        </Text>
      </View>
    )
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <Card>
        <CardSection>
          <Title title={'What is the title of your new deck?'} />
        </CardSection>
        <Form>
          <Field
            name='deckTitle'
            component={this.renderDeckTitle}
            label='Deck Title'
            placeholder='Type in the deck title here'
            />
          <Button onPress={handleSubmit(this.onButtonPress)}>
            Submit
          </Button>
        </Form>
      </Card>
    )
  }
}

function validate(values){
  const errors = {}
  if (!values.deckTitle){
    errors.deckTitle = '* Required'
  }
  // don't forget to return errors
  return errors
}

const connectAddDeck = connect(
  null, { addDeck }
)(reduxForm({
  validate,
  enableReinitialize: true,
  form: 'addDeckForm'
})(AddDeck));

export { connectAddDeck };
