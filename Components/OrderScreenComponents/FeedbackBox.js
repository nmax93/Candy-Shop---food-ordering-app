import React, { Component } from 'react'
import { StyleSheet, View, Animated, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '80%',
    borderRadius: 25,
    backgroundColor: 'darkgray',
    position: 'absolute',
    left: '10%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Arial'
  }
})

export default class FeedbackBox extends Component {
  constructor(props) {
    super(props)
    this.state = { opacity: new Animated.Value(0) }
    this.feedBackFadeIn = this.feedBackFadeIn.bind(this)
    this.feedBackHold = this.feedBackHold.bind(this)
    this.feedBackFadeOut = this.feedBackFadeOut.bind(this)
  }

  feedBackFadeIn() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 800
    }).start(() => {
      this.feedBackHold()
    })
  }

  feedBackHold() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 2000
    }).start(() => {
      this.feedBackFadeOut()
    })
  }

  feedBackFadeOut() {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 800
    }).start()
  }

  render() {
    return (
      <Animated.View style={[styles.container, { opacity: this.state.opacity }]}>
        <Text style={styles.text}>Order added to the cart</Text>
      </Animated.View>
    )
  }
}
