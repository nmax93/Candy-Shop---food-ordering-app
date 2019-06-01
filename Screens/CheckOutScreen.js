import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import CheckOutProduct from '../Components/CheckOutScreenComponents/CheckOutProduct'
import CheckOutHeader from '../Components/CheckOutScreenComponents/CheckOutHeader'
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
    this.state = {}
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <ScrollView>
          <CheckOutHeader />
          <CheckOutProduct />
          <CheckOutProduct />
          <CheckOutProduct />
          <CheckOutTotal />
          <PrettyButton
            text="CHECK OUT"
            onPress={() => navigation.navigate('ConfirmationScreen')}
          />
        </ScrollView>
      </View>
    )
  }
}
