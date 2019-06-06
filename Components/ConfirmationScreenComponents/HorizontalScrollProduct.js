import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 220,
    width: 150,
    backgroundColor: 'white',
    margin: 5,
    padding: 5
  },
  image: {
    height: 130,
    width: '100%'
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'black',
    paddingTop: 10,
    fontWeight: 'bold'
  },
  price: {
    color: 'forestgreen'
  }
})

export default class CheckOutScreen extends Component {
  static propTypes = {
    handlePress: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
  }

  render() {
    const product = this.props.product

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.handlePress()}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <Text style={styles.text}>{product.name}</Text>
        <Text style={[styles.text, styles.price]}>${product.price}.00</Text>
      </TouchableOpacity>
    )
  }
}
