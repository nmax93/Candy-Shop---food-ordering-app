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
    this.state = { total: '' }
    this.mapOrders = this.mapOrders.bind(this)
    this.finishProcess = this.finishProcess.bind(this)
    this.updateTotal = this.updateTotal.bind(this)
    this.generateTotal = this.generateTotal.bind(this)
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.generateTotal()
  }

  mapOrders() {
    const { navigation } = this.props
    const cart = navigation.getParam('cart')
    let count = 0
    const orders = cart.map(item => {
      return <CheckOutProduct key={count++} order={item} />
    })
    return orders
  }

  updateTotal(newTotal) {
    this.setState({ total: newTotal })
  }

  generateTotal() {
    const { navigation } = this.props
    const cart = navigation.getParam('cart')
    let price = 0
    cart.forEach(order => {
      price += order.product.price
      order.addOns.forEach(addOn => (price += addOn.price))
    })
    const rounded = Math.round(price)
    if (price - rounded === 0) this.setState({ total: `${price}.00` })
    else this.setState({ total: `${price}0` })
  }

  finishProcess() {
    const { navigation } = this.props
    const emptyCart = navigation.getParam('emptyCart')
    const MainScreenDishes = navigation.getParam('dishes')
    const addToCart = navigation.getParam('addToCart')
    const cart = navigation.getParam('cart')
    navigation.navigate('ConfirmationScreen', {
      dishes: MainScreenDishes,
      addToCart: addToCart,
      emptyCart: emptyCart,
      total: this.state.total,
      cart: cart
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TitleBar title="Your orders" />
          {this.mapOrders()}
          <CheckOutTotal total={this.state.total} />
          <PrettyButton text="CHECK OUT" handlePress={this.finishProcess} />
        </ScrollView>
      </View>
    )
  }
}
