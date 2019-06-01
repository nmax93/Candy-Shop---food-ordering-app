import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import HorizontalScrollProduct from './HorizontalScrollProduct'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 240,
    width: '100%',
    padding: 10,
    position: 'absolute',
    marginTop: 80
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
    const navigation = this.props.navigation

    return (
      <ScrollView style={styles.container} horizontal={true}>
        <HorizontalScrollProduct onPress={() => navigation.navigate('OrderScreen')} />
        <HorizontalScrollProduct onPress={() => navigation.navigate('OrderScreen')} />
        <HorizontalScrollProduct onPress={() => navigation.navigate('OrderScreen')} />
        <HorizontalScrollProduct onPress={() => navigation.navigate('OrderScreen')} />
        <HorizontalScrollProduct onPress={() => navigation.navigate('OrderScreen')} />
      </ScrollView>
    )
  }
}
