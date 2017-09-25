import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { NavigationActions } from 'react-navigation'

import { Card, CardSection, Form, Title, Input, Button } from '../components/common'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class AddCard extends React.Component {

  onButtonPress = ({question, answer}) => {
    const { navigate, state : { params : { title } } } = this.props.navigation

    // save deck title to Redux store
    this.props.addCard(title, {question, answer})

    // save deck title to AsyncStorage
    addCardToDeck(title, {question, answer})

    // navigate to DeckDetail
    navigate('DeckDetail', {title})

  }

  renderInput = (field) => {
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
          <Title title={'Please enter in the question and answer below '} />
        </CardSection>
        <Form>
          <Field
            name='question'
            component={this.renderInput}
            label='Question'
            placeholder='Type in the question here'
            />
          <Field
            name='answer'
            component={this.renderInput}
            label='Answer'
            placeholder='Type in the answer here'
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
  if (!values.question){
    errors.question = '* Required'
  }
  if (!values.answer){
    errors.answer = '* Required'
  }
  // don't forget to return errors
  return errors
}

const connectAddCard = connect(
  null, { addCard }
)(reduxForm({
  validate,
  enableReinitialize: true,
  form: 'addCardForm'
})(AddCard));

export { connectAddCard };
