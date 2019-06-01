import React, { Component } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import MainScreenProduct from '../Components/MainScreenComponents/MainScreenProduct'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro'
  }
})

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    const { navigation } = this.props
      return (
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('OrderScreen')}>
            <MainScreenProduct />
          </TouchableOpacity>
          <MainScreenProduct />
          <MainScreenProduct />
        </ScrollView>
      )
}
