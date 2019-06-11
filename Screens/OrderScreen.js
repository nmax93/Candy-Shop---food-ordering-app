import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import OrderDetails from '../Components/OrderScreenComponents/OrderDetails'
import OrderImage from '../Components/OrderScreenComponents/OrderImage'
import AddOnsButton from '../Components/OrderScreenComponents/AddOnsButton'
import AddOnsList from '../Components/OrderScreenComponents/AddOnsList'
import FeedbackBox from '../Components/OrderScreenComponents/FeedbackBox'
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
    this.state = { selectedAddOns: [] }
    this.AddOnsListController = React.createRef()
    this.FeedbackBoxController = React.createRef()
    this.getUserAddOn = this.getUserAddOn.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  getUserAddOn(addOn) {
    if (!this.state.selectedAddOns.includes(addOn)) {
      this.setState(prevState => ({
        selectedAddOns: [...prevState.selectedAddOns, addOn]
      }))
    } else {
      const index = this.state.selectedAddOns.indexOf(addOn)
      if (index > -1) {
        const stateArray = this.state.selectedAddOns
        stateArray.splice(index, 1)
        this.setState({ selectedAddOns: stateArray })
      }
    }
  }

  handleOrder() {
    const { navigation } = this.props
    const addToCart = navigation.getParam('addToCart')
    const product = navigation.getParam('product')

    addToCart(product, this.state.selectedAddOns)
    this.FeedbackBoxController.current.feedBackFadeIn()
  }

  render() {
    const { navigation } = this.props
    const product = navigation.getParam('product')

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
          <PrettyButton text="ADD TO CART" handlePress={this.handleOrder} />
          <SeparationLine />
        </ScrollView>
        <FeedbackBox ref={this.FeedbackBoxController} />
        <AddOnsList
          ref={this.AddOnsListController}
          addOns={product.addOns}
          passAddOnDetails={addOn => this.getUserAddOn(addOn)}
        />
      </View>
    )
  }
}
