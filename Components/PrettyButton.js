import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    width: '70%',
    backgroundColor: 'forestgreen',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Arial',
    margin: 3,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default class PrettyButton extends Component {
  static propTypes = {
    handlePress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.center]}
          onPress={() => this.props.handlePress()}
        >
          <Text style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
