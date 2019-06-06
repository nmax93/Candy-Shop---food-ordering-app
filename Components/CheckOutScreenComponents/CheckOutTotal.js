import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    padding: 15
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
  constructor(props) {
    super(props)
    this.generateTotal = this.generateTotal.bind(this)
  }

  static propTypes = {
    ordersList: PropTypes.array.isRequired
  }

  generateTotal() {
    const orders = this.props.ordersList
    let price = 0
    orders.forEach(order => {
      price += order.product.price
      order.addOns.forEach(addOn => (price += addOn.price))
    })
    const rounded = Math.round(price)
    if (price - rounded === 0) return price + '.00'
    return price + '0'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.text}>TOTAL</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.text, styles.price]}>${this.generateTotal()}</Text>
        </View>
      </View>
    )
  }
}
