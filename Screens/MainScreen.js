import React, { Component } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import MainScreenProduct from '../Components/MainScreenComponents/MainScreenProduct'
import PropTypes from 'prop-types'
import { myAPIkey, myDatabase, myCollection } from '../consts'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro'
  }
})

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { isReady: true, dishes: [] }
    this.getData = this.getData.bind(this)
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  componentWillMount() {
    //this.getData()
  }

  getData() {
    const url = `https://api.mlab.com/api/1/databases/${myDatabase}/collections/${myCollection}?apiKey=${myAPIkey}`
    fetch(`${url}`)
      .then(res => res.json())
      .then(data => JSON.parse(data))
      .then(object => this.setState({ dishes: object.dishes, isReady: true }))
      .then(this.state.dishes[1].name)
      .catch()
  }

  render() {
    const { navigation } = this.props
    if (this.state.isReady === true) {
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
    return <ActivityIndicator />
  }
}
