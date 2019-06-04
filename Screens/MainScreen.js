import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import MainScreenProduct from '../Components/MainScreenComponents/MainScreenProduct'
import TitleBar from '../Components/TitleBar'
import Loading from '../Components/Loading'
import Cart from '../Components/Cart'
import PropTypes from 'prop-types'
import { myAPIkey, myDatabase, myCollection, myDocument } from '../consts'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro'
  },
  cart: {
    bottom: 35,
    right: 35,
    position: 'absolute'
  }
})

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { isReady: false, dishes: [], cart: [] }
    this.getData = this.getData.bind(this)
    this.mapProducts = this.mapProducts.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    const url = `https://api.mlab.com/api/1/databases/${myDatabase}/collections/${myCollection}/${myDocument}?apiKey=${myAPIkey}`
    fetch(`${url}`)
      .then(res => res.json())
      .then(data => this.setState({ dishes: data.dishes, isReady: true }))
      .catch()
  }

  addToCart(product) {
    this.setState(prevState => ({
      cart: [...prevState.cart, product]
    }))
  }

  mapProducts() {
    const { navigation } = this.props
    let count = 0
    const products = this.state.dishes.map(item => {
      return (
        <MainScreenProduct
          key={count++}
          product={item}
          navigation={navigation}
          addToCart={() => this.addToCart(item)}
        />
      )
    })
    return products
  }

  render() {
    if (this.state.isReady === true) {
      const { navigation } = this.props
      return (
        <View>
          <ScrollView style={styles.container}>
            <TitleBar title={this.state.dishes.length + ' results were found'} />
            {this.mapProducts()}
          </ScrollView>
          {this.state.cart.length !== 0 && (
            <View style={styles.cart}>
              <Cart
                amount={this.state.cart.length}
                onPress={() => navigation.navigate('CheckOutScreen', { cart: this.state.cart })}
              />
            </View>
          )}
        </View>
      )
    }
    return <Loading />
  }
}
