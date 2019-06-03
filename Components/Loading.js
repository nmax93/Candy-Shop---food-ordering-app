import React, { Component } from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%'
  },
  image: {
    width: 60,
    height: 60
  }
})

export default class Loading extends Component {
  constructor() {
    super()
    this.RotationValue = new Animated.Value(0)
    this.rotate = this.rotate.bind(this)
  }

  componentDidMount() {
    this.rotate()
  }

  rotate() {
    this.RotationValue.setValue(0)
    Animated.timing(this.RotationValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start(() => this.rotate())
  }

  render() {
    const RotateData = this.RotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, { transform: [{ rotate: RotateData }] }]}
          source={require('../Images/candy.png')}
        />
      </View>
    )
  }
}
