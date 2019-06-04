import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  text: {
    fontFamily: 'Arial',
    marginTop: 4,
    paddingLeft: 15,
    fontSize: 16,
    color: 'black'
  },
  price: {
    fontWeight: 'bold'
  },
  name: {
    color: 'darkgray',
    fontStyle: 'italic'
  },
  priceSection: { width: '35%' }
})

export default class CheckOutAddOn extends Component {
  constructor(props) {
    super(props)
    this.padPrice = this.padPrice.bind(this)
  }

  static propTypes = {
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }

  padPrice(price) {
    if (price >= 1) return price.toString() + '.00'
    return price.toString() + '0'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.priceSection}>
          <Text style={[styles.text, styles.price]}>${this.padPrice(this.props.price)}</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.name]}>{this.props.name}</Text>
        </View>
      </View>
    )
  }
}
