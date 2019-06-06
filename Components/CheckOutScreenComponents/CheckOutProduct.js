import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import CheckOutAddOn from './CheckOutAddOn'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '98%',
    backgroundColor: 'white',
    marginLeft: '1%',
    marginTop: '1%'
  },
  section: { width: '50%' },
  inline: { flexDirection: 'row' },
  image: {
    height: 200,
    width: '100%'
  },
  text: {
    fontFamily: 'Arial',
    marginTop: 4,
    paddingLeft: 15,
    fontSize: 16,
    color: 'black'
  },
  title: {
    padding: 5,
    fontSize: 18
  },
  price: { fontWeight: 'bold' }
})

export default class CheckOutProduct extends Component {
  constructor(props) {
    super(props)
    this.mapAddmapSelectedAddOnsOns = this.mapSelectedAddOns.bind(this)
  }

  static propTypes = {
    order: PropTypes.object.isRequired
  }

  mapSelectedAddOns() {
    const addOns = this.props.order.addOns
    let count = 0
    const addOnsList = addOns.map(item => {
      return <CheckOutAddOn key={count++} name={item.name} price={item.price} />
    })
    return addOnsList
  }

  render() {
    const order = this.props.order
    return (
      <View style={styles.container}>
        <View style={styles.inline}>
          <View style={styles.section}>
            <Image style={styles.image} source={{ uri: order.product.image }} />
          </View>
          <View style={styles.section}>
            <Text style={[styles.text, styles.title]}>{order.product.name}</Text>
            <Text style={[styles.text, styles.price]}>${order.product.price}.00</Text>
            {this.mapSelectedAddOns()}
          </View>
        </View>
      </View>
    )
  }
}
