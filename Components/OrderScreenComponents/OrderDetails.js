import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  text: {
    fontFamily: 'Arial',
    padding: 3,
    color: 'black',
    fontSize: 18
  },
  description: {
    fontFamily: 'Arial',
    padding: 3,
    fontSize: 14,
    color: 'darkgray',
    fontStyle: 'italic'
  },
  price: { fontWeight: 'bold' }
})

export default class OrderDetails extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Text style={[styles.text, styles.price]}>${this.props.price}.00</Text>
        <Text style={styles.description}>{this.props.description}</Text>
      </View>
    )
  }
}
