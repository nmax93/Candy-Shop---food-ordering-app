import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import CheckOutProduct from '../Components/CheckOutScreenComponents/CheckOutProduct'
import TitleBar from '../Components/TitleBar'
import CheckOutTotal from '../Components/CheckOutScreenComponents/CheckOutTotal'
import PrettyButton from '../Components/PrettyButton'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro'
  }
})

export default class CheckOutScreen extends Component {
  constructor(props) {
    super(props)
    this.mapOrders = this.mapOrders.bind(this)
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  mapOrders() {
    const { navigation } = this.props
    const cart = navigation.getParam('cart', '')
    let count = 0
    const orders = cart.map(item => {
      return <CheckOutProduct key={count++} product={item} />
    })
    return orders
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <ScrollView>
          <TitleBar title="Your orders" />
          {this.mapOrders()}
          <PrettyButton
            text="CHECK OUT"
            onPress={() => navigation.navigate('ConfirmationScreen')}
          />
        </ScrollView>
      </View>
    )
  }
}
