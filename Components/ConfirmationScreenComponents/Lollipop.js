import React, { Component } from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: '100%'
  },
  image: {
    width: 80,
    height: 80
  }
})

export default class Lollipop extends Component {
  constructor() {
    super()
    this.RotateValueHolder = new Animated.Value(0)
    this.rotateRight = this.rotateRight.bind(this)
    this.rotateLeft = this.rotateLeft.bind(this)
    this.rotateRightAgain = this.rotateRightAgain.bind(this)
    this.rotateLeftAgain = this.rotateLeftAgain.bind(this)
    this.wait = this.wait.bind(this)
  }

  componentDidMount() {
    this.rotateRight()
  }

  rotateRight() {
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 150,
      easing: Easing.linear
    }).start(() => this.rotateLeft())
  }

  rotateLeft() {
    Animated.timing(this.RotateValueHolder, {
      toValue: 0,
      duration: 150,
      easing: Easing.linear
    }).start(() => this.rotateRightAgain())
  }

  rotateRightAgain() {
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 150,
      easing: Easing.linear
    }).start(() => this.rotateLeftAgain())
  }

  rotateLeftAgain() {
    Animated.timing(this.RotateValueHolder, {
      toValue: 0,
      duration: 150,
      easing: Easing.linear
    }).start(() => this.wait())
  }

  wait() {
    Animated.timing(this.RotateValueHolder, {
      toValue: 0,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.rotateRight())
  }

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['330deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, { transform: [{ rotate: RotateData }] }]}
          source={require('../../Images/lollipop.png')}
        />
      </View>
    )
  }
}
