import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import OrderDetails from '../Components/OrderScreenComponents/OrderDetails'
import OrderImage from '../Components/OrderScreenComponents/OrderImage'
import AddOnsButton from '../Components/OrderScreenComponents/AddOnsButton'
import AddOnsList from '../Components/OrderScreenComponents/AddOnsList'
import SeparationLine from '../Components/SeparationLine'
import PrettyButton from '../Components/PrettyButton'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
})

export default class OrderScreen extends Component {
  constructor(props) {
    super(props)
    this.AddOnsListController = React.createRef()
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    const { navigation } = this.props
    const product = navigation.getParam('product', {})
    const addToCart = navigation.getParam('addToCart', [])

    return (
      <View style={styles.container}>
        <ScrollView>
          <OrderImage url={product.image} />
          <OrderDetails
            title={product.name}
            price={product.price}
            description={product.description}
          />
          <SeparationLine />
          <AddOnsButton controller={this.AddOnsListController} />
          <SeparationLine />
          <PrettyButton text="ADD TO CART" onPress={() => addToCart()} />
          <SeparationLine />
        </ScrollView>
        <AddOnsList ref={this.AddOnsListController} addOns={product.addOns} />
      </View>
    )
  }
}
