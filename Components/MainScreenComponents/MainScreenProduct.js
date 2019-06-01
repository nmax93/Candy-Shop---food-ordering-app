import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '98%',
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: '1%',
    marginTop: '2%'
  },
  image: {
    height: 220,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  text: {
    fontFamily: 'Arial',
    marginTop: 8
  },
  title: {
    fontSize: 16,
    color: 'black',
    width: '50%',
    paddingLeft: 15
  },
  price: {
    fontSize: 18,
    color: 'forestgreen',
    fontWeight: 'bold',
    width: '50%',
    textAlign: 'right',
    paddingRight: 15
  },
  description: {
    fontSize: 12,
    color: 'darkgray',
    fontStyle: 'italic',
    paddingLeft: 15
  },
  inline: { flexDirection: 'row' }
})

export default class MainScreenProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://www.curiouscuisiniere.com/wp-content/uploads/2013/05/French-Sweet-Crepes-with-Nutella-3984.21.jpg'
          }}
        />
        <View style={styles.inline}>
          <Text style={[styles.text, styles.title]}>French Crepe</Text>
          <Text style={[styles.text, styles.price]}>$7.00</Text>
        </View>
        <Text style={[styles.text, styles.description]}>
          Sweet french crepe with powdered sugar available with Nutella, bananas, strawberries,
          cream and hazelnuts
        </Text>
      </View>
    )
  }
}
