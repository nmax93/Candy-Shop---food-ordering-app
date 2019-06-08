import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    height: 260,
    width: '96%',
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: '2%',
    marginBottom: '3%'
  },
  scrollView: {
    height: 170,
    width: '92%',
    margin: 5
  },
  image: {
    height: 150,
    width: 110,
    margin: 8
  },
  text: {
    fontFamily: 'Arial',
    padding: 15,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default class HistoryOrder extends Component {
  constructor(props) {
    super(props)
    this.mapImages = this.mapImages.bind(this)
  }

  static propTypes = {
    order: PropTypes.object.isRequired
  }

  mapImages() {
    let count = 0
    const images = this.props.order.images.map(item => {
      return <Image key={count++} style={styles.image} source={{ uri: item }} />
    })
    return images
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.order.date}</Text>
        <ScrollView style={styles.scrollView} horizontal={true}>
          {this.mapImages()}
        </ScrollView>
        <Text style={styles.text}>Total price: ${this.props.order.price}</Text>
      </View>
    )
  }
}
