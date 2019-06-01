import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>French Crepe</Text>
        <Text style={[styles.text, styles.price]}>$7.00</Text>
        <Text style={styles.description}>
          Sweet french crepe with powdered sugar available with Nutella, bananas, strawberries,
          cream and hazelnuts
        </Text>
      </View>
    )
  }
}
