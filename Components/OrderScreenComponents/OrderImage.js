import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: '100%'
  }
})

export default class OrderImage extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{
          uri:
            'https://www.curiouscuisiniere.com/wp-content/uploads/2013/05/French-Sweet-Crepes-with-Nutella-3984.21.jpg'
        }}
      />
    )
  }
}
