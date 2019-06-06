import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import HorizontalScrollProduct from './HorizontalScrollProduct'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 240,
    width: '100%',
    padding: 10,
    position: 'absolute',
    marginTop: 80
  }
})

export default class CheckOutScreen extends Component {
  constructor(props) {
    super(props)
    this.mapProducts = this.mapProducts.bind(this)
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  mapProducts() {
    const { navigation } = this.props
    const dishes = navigation.getParam('dishes')
    const addToCart = navigation.getParam('addToCart')
    let count = 0
    const availableDishes = dishes.map(item => {
      return (
        <HorizontalScrollProduct
          key={count++}
          handlePress={() =>
            navigation.navigate('OrderScreen', {
              product: item,
              addToCart: addToCart
            })
          }
          product={item}
        />
      )
    })
    return availableDishes
  }

  render() {
    return (
      <ScrollView style={styles.container} horizontal={true}>
        {this.mapProducts()}
      </ScrollView>
    )
  }
}
