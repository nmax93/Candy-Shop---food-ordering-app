import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '98%',
    backgroundColor: 'white',
    marginLeft: '1%',
    marginTop: '1%'
  },
  section: { width: '50%' },
  priceSection: { width: '35%' },
  inline: { flexDirection: 'row' },
  image: {
    height: 200,
    width: '100%'
  },
  text: {
    fontFamily: 'Arial',
    marginTop: 4,
    paddingLeft: 15,
    fontSize: 16,
    color: 'black'
  },
  title: {
    padding: 5,
    fontSize: 18
  },
  price: {
    fontWeight: 'bold'
  },
  addOns: {
    color: 'darkgray',
    fontStyle: 'italic'
  }
})

export default class CheckOutProduct extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inline}>
          <View style={styles.section}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://www.curiouscuisiniere.com/wp-content/uploads/2013/05/French-Sweet-Crepes-with-Nutella-3984.21.jpg'
              }}
            />
          </View>
          <View style={styles.section}>
            <Text style={[styles.text, styles.title]}>French Crepe</Text>
            <Text style={[styles.text, styles.price]}>$7.00</Text>
            <View style={styles.inline}>
              <View style={styles.priceSection}>
                <Text style={[styles.text, styles.price]}>$1.00</Text>
              </View>
              <View>
                <Text style={[styles.text, styles.addOns]}>Nutella</Text>
              </View>
            </View>
            <View style={styles.inline}>
              <View style={styles.priceSection}>
                <Text style={[styles.text, styles.price]}>$1.00</Text>
              </View>
              <View>
                <Text style={[styles.text, styles.addOns]}>Strawberries</Text>
              </View>
            </View>
            <View style={styles.inline}>
              <View style={styles.priceSection}>
                <Text style={[styles.text, styles.price]}>$1.00</Text>
              </View>
              <View>
                <Text style={[styles.text, styles.addOns]}>Bananas</Text>
              </View>
            </View>
            <View style={styles.inline}>
              <View style={styles.priceSection}>
                <Text style={[styles.text, styles.price]}>$1.00</Text>
              </View>
              <View>
                <Text style={[styles.text, styles.addOns]}>Cream</Text>
              </View>
            </View>
            <View style={styles.inline}>
              <View style={styles.priceSection}>
                <Text style={[styles.text, styles.price]}>$1.00</Text>
              </View>
              <View>
                <Text style={[styles.text, styles.addOns]}>Hazelnuts</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
