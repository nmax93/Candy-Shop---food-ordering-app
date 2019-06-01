import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 220,
    width: 150,
    backgroundColor: 'white',
    margin: 5,
    padding: 5
  },
  image: {
    height: 130,
    width: '100%'
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'black',
    paddingTop: 10,
    fontWeight: 'bold'
  },
  price: {
    color: 'forestgreen'
  }
})

export default class CheckOutScreen extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://www.curiouscuisiniere.com/wp-content/uploads/2013/05/French-Sweet-Crepes-with-Nutella-3984.21.jpg'
          }}
        />
        <Text style={styles.text}>French Crepe</Text>
        <Text style={[styles.text, styles.price]}>$7.00</Text>
      </TouchableOpacity>
    )
  }
}
