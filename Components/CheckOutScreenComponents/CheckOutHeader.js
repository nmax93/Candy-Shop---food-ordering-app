import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 55
  },
  text: {
    fontWeight: 'bold',
    color: 'darkgray',
    fontSize: 26,
    textShadowRadius: 7,
    paddingLeft: 10
  },
  image: {
    height: 55,
    width: 55,
    marginRight: 10
  },
  section: { width: '50%' },
  imageToRight: { alignItems: 'flex-end' },
  alignVertical: { justifyContent: 'center' }
})

const CheckOutHeader = () => (
  <View style={styles.container}>
    <View style={[styles.section, styles.alignVertical]}>
      <Text style={styles.text}>MY ORDERS</Text>
    </View>
    <View style={[styles.section, styles.imageToRight]}>
      <Image source={require('../../Images/cart.png')} style={styles.image} />
    </View>
  </View>
)

export default CheckOutHeader
