import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 15
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18
  },
  section: {
    width: '50%',
    justifyContent: 'center'
  },
  price: {
    color: 'forestgreen',
    textAlign: 'right'
  }
})

export default class CheckOutTotal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.text}>TOTAL</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.text, styles.price]}>$36.00</Text>
        </View>
      </View>
    )
  }
}
