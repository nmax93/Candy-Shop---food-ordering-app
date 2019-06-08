import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Animated, Image } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  button: {
    backgroundColor: '#e91d63',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  image: {
    height: '65%',
    width: '65%'
  }
})

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(1)
    this.handlePressIn = this.handlePressIn.bind(this)
    this.handlePressOut = this.handlePressOut.bind(this)
  }

  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 0.7
    }).start()
  }

  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 5
    }).start(() => this.props.onPress())
  }

  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue }]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
          <Animated.View style={[styles.button, animatedStyle]}>
            <Image source={require('../Images/history.png')} style={styles.image} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
