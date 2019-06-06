import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import SeparationLine from '../SeparationLine'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingLeft: 15,
    flexDirection: 'row'
  },
  text: {
    fontFamily: 'Arial',
    margin: 3,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    width: '50%'
  },
  checkIcon: {
    height: 25,
    width: 25,
    position: 'absolute',
    marginLeft: '90%'
  },
  inline: {
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  },
  price: {
    width: '50%',
    paddingLeft: '20%'
  }
})

export default class AddOn extends Component {
  constructor(props) {
    super(props)
    this.state = { check: false }
    this.checkAddOn = this.checkAddOn.bind(this)
    this.padPrice = this.padPrice.bind(this)
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    passAddOnDetails: PropTypes.func.isRequired
  }

  checkAddOn() {
    if (this.state.check === false) this.setState({ check: true })
    else this.setState({ check: false })
    this.props.passAddOnDetails()
  }

  padPrice(price) {
    if (price >= 1) return price.toString() + '.00'
    return price.toString() + '0'
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.container} onPress={() => this.checkAddOn()}>
          <View style={styles.inline}>
            <Text style={styles.text}>{this.props.name}</Text>
            <Text style={[styles.text, styles.price]}>${this.padPrice(this.props.price)}</Text>
            {this.state.check && (
              <Image style={styles.checkIcon} source={require('../../Images/check.png')} />
            )}
          </View>
        </TouchableOpacity>
        <SeparationLine />
      </View>
    )
  }
}
