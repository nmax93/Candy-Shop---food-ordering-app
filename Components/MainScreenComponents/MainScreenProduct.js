import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '98%',
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: '1%',
    marginTop: '2%'
  },
  image: {
    height: 220,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  text: {
    fontFamily: 'Arial',
    marginTop: 8
  },
  title: {
    fontSize: 16,
    color: 'black',
    width: '50%',
    paddingLeft: 15
  },
  price: {
    fontSize: 18,
    color: 'forestgreen',
    fontWeight: 'bold',
    width: '50%',
    textAlign: 'right',
    paddingRight: 15
  },
  description: {
    fontSize: 12,
    color: 'darkgray',
    fontStyle: 'italic',
    paddingLeft: 15
  },
  inline: { flexDirection: 'row' }
})

export default class MainScreenProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  }

  render() {
    const navigation = this.props.navigation
    const product = this.props.product

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('OrderScreen', {
            product: this.props.product,
            addToCart: this.props.addToCart
          })
        }
      >
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.inline}>
          <Text style={[styles.text, styles.title]}>{product.name}</Text>
          <Text style={[styles.text, styles.price]}>${product.price}.00</Text>
        </View>
        <Text style={[styles.text, styles.description]}>{product.description}</Text>
      </TouchableOpacity>
    )
  }
}
