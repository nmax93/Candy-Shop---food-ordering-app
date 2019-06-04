import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'darkgray',
    fontSize: 16
  }
})

export default class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    )
  }
}
