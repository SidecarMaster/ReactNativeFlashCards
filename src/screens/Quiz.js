import React from 'react'
import { View, Text, Button, Animated, Dimensions, StyleSheet } from 'react-native'

import { Card, CardSection, Title } from '../components/common'

const SCREEN_WIDTH = Dimensions.get('window').width
const FLIPCARD_HEIGHT = 300

class Quiz extends React.Component {

  state = {
    index: 0,
    score: 0,
  }
  // Must be componentWillMount instead of componentDidMount,
  // otherwise 'Cannot read property .getLayout() of undefine' on first render.
  componentWillMount(){
    this.swipeAnimation = new Animated.ValueXY()

    this.flipAnimation = new Animated.Value(0)
    this.flipValue = 0
    this.flipAnimation.addListener(({value})=>{
      this.value = value
    })
    this.frontInterpolate = this.flipAnimation.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.flipAnimation.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    })
  }

  flipCard = () => {
    if (this.value >= 90) {
      Animated.spring(this.flipAnimation,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.flipAnimation,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  response = (response) => {
    // Use Animated.timing here, because spring has a bouncing effect that,
    // after the card disappear off the screen, it will bounce off the screen for half a second,
    // and then render the next card. Your user won't see the bouncing effect, they will have
    // a 'laggy' experience while it's actually not.
    Animated.timing(this.swipeAnimation, {
      // Negative means it comes off the screen from right to left.
      toValue: {x: -SCREEN_WIDTH, y: 0},
    }).start(() => this.onSwipeComplete(response))
  }

  onSwipeComplete(response) {
    const { index, score } = this.state
    // Increment index so that show the next card
    this.setState(
      (response==='correct')? {index: index+1, score: score+1}:{index: index+1}
    )
    // Make card reappear
    this.swipeAnimation.setValue({x:0, y:0})
  }

  render () {
    const { state : { params : { title, questions } } } = this.props.navigation
    const { score, index } = this.state
    const questionsNo = questions.length

    if (index === questionsNo) {
      return (
        <Card>
          <CardSection>
            <Text>
              {`I got the answers to ${Math.round(score/questionsNo*100)}% of questions.`}
            </Text>
          </CardSection>
        </Card>
      )
    }

    return (
      <Animated.View style={this.swipeAnimation.getLayout()}>
        <Card>
          <CardSection>
            <Text>{`${index+1} / ${questionsNo}`}</Text>
          </CardSection>
          <View>
            <Animated.View style={[styles.flipCard, {transform:[{rotateY: this.frontInterpolate}]}]}>
                <Title
                  title={questions[index].question}
                />
                <Button
                  onPress={()=>this.flipCard()}
                  title="Answer"
                />
            </Animated.View>

            <Animated.View style={[{transform:[{rotateY: this.backInterpolate}]}, styles.flipCard]}>
                <Title
                  title={questions[index].answer}
                />
                <Button
                  onPress={()=>this.flipCard()}
                  title="Question"
                />
            </Animated.View>
          </View>
          <View style={styles.buttonStyle}>
            <CardSection>
              <Button
                onPress={()=>this.response('correct')}
                title="Yes, I got it."
              />
            </CardSection>
            <CardSection>
              <Button
                onPress={()=>this.response('incorrect')}
                title="Nope, still need to learn"
              />
            </CardSection>
          </View>
        </Card>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  flipCard: {
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    // <Card> marginLeft & marginRight are 5 each, and paddingLeft & paddingRight 10 each.
    width: SCREEN_WIDTH-30,
    height: FLIPCARD_HEIGHT,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
  },
  buttonStyle: {
    marginTop: FLIPCARD_HEIGHT
  }
})

export { Quiz };
