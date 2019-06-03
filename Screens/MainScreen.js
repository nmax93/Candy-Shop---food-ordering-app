import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import MainScreenProduct from '../Components/MainScreenComponents/MainScreenProduct'
import Loading from '../Components/Loading'
import PropTypes from 'prop-types'
import { myAPIkey, myDatabase, myCollection, myDocument } from '../consts'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro'
  }
})

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { isReady: false, dishes: [] }
    this.getData = this.getData.bind(this)
    this.mapProducts = this.mapProducts.bind(this)
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

  mapProducts() {
    const { navigation } = this.props
    let count = 0
    const products = this.state.dishes.map(item => {
      return <MainScreenProduct key={count++} product={item} navigation={navigation} />
    })
    return products
  }

  render() {
    if (this.state.isReady === true) {
      return <ScrollView style={styles.container}>{this.mapProducts()}</ScrollView>
    }
    return <Loading />
  }
}
