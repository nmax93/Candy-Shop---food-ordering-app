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
    //this.mapAddOns = this.mapAddOns.bind(this)
  }

  static propTypes = {
    product: PropTypes.object.isRequired
  }

  render() {
    const product = this.props.product

    return (
      <View style={styles.container}>
        <View style={styles.inline}>
          <View style={styles.section}>
            <Image style={styles.image} source={{ uri: product.image }} />
          </View>
          <View style={styles.section}>
            <Text style={[styles.text, styles.title]}>{product.name}</Text>
            <Text style={[styles.text, styles.price]}>${product.price}.00</Text>
            <CheckOutAddOn name="NUTELLA" price={1} />
            <CheckOutAddOn name="asdgag" price={1} />
            <CheckOutAddOn name="sdf" price={1} />
            <CheckOutAddOn name="sdfg" price={0.5} />
          </View>
        </View>
      </View>
    )
  }
}
