import React, { Component } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import ConfirmationMessage from '../Components/ConfirmationScreenComponents/ConfirmationMessage'
import HorizontalScroll from '../Components/ConfirmationScreenComponents/HorizontalScroll'
import Lollipop from '../Components/ConfirmationScreenComponents/Lollipop'
import PrettyButton from '../Components/PrettyButton'
import Loading from '../Components/Loading'
import PropTypes from 'prop-types'
import { myAPIkey, myDatabase, myCollection, historyDocument } from '../consts'

const Window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Window.height,
    width: Window.width,
    backgroundColor: 'gainsboro',
    position: 'absolute',
    paddingBottom: 30
  },
  lollipop: { top: '25%' },
  horizontalScroll: { top: '22%' },
  button: { top: '73%' }
})

export default class ConfirmationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { isReady: false, history: [] }
    this.getOrdersImages = this.getOrdersImages.bind(this)
    this.getDateAndTime = this.getDateAndTime.bind(this)
    this.updateDatabase = this.updateDatabase.bind(this)
  }
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.updateDatabase()
  }

  getOrdersImages() {
    const { navigation } = this.props
    const cart = navigation.getParam('cart')
    const images = []
    cart.forEach(order => images.push(order.product.image))
    return images
  }

  getDateAndTime() {
    const date = new Date()
    const year = date.getFullYear()
    let month
    if (date.getMonth() + 1 < 10) month = '0' + (date.getMonth() + 1)
    else month = date.getMonth() + 1
    let day
    if (date.getDate() < 10) day = '0' + date.getDate()
    else day = date.getDate()
    let hours
    if (date.getHours() < 10) hours = '0' + date.getHours()
    else hours = date.getHours()
    let minutes
    if (date.getMinutes() < 10) minutes = '0' + date.getMinutes()
    else minutes = date.getMinutes()

    return `${day}-${month}-${year} ${hours}:${minutes}`
  }

  updateDatabase() {
    const { navigation } = this.props
    const emptyCart = navigation.getParam('emptyCart')
    const total = navigation.getParam('total')
    const order = {
      date: this.getDateAndTime(),
      images: this.getOrdersImages(),
      price: total
    }
    const url = `https://api.mlab.com/api/1/databases/${myDatabase}/collections/${myCollection}/${historyDocument}?apiKey=${myAPIkey}`
    fetch(`${url}`)
      .then(res => res.json())
      .then(data => this.setState({ history: data.history, isReady: true }))
      .catch()
    const history = [...this.state.history]
    history.push(order)
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({ history }))
    emptyCart()
  }

  render() {
    const { navigation } = this.props
    if (this.state.isReady) {
      return (
        <View style={styles.container}>
          <ConfirmationMessage />
          <View style={styles.lollipop}>
            <Lollipop />
          </View>
          <View style={styles.horizontalScroll}>
            <HorizontalScroll navigation={navigation} />
          </View>
          <View style={styles.button}>
            <PrettyButton text="CONTINUE SHOPPING" handlePress={navigation.popToTop} />
          </View>
        </View>
      )
    }
    return <Loading />
  }
}
