import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 30,
    marginTop: 15,
    position: 'absolute'
  },
  text: {
    fontWeight: 'bold',
    color: 'darkgray',
    fontSize: 24
  }
})

const ConfirmationMessage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>YOUR ORDER WILL SOON BE WITH YOU :)</Text>
  </View>
)

export default ConfirmationMessage
