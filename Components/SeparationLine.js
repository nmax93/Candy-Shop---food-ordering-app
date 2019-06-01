import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  separationLine: {
    width: '90%',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1
  },
  center: { alignItems: 'center' }
})

const SeparationLine = () => (
  <View style={styles.center}>
    <View style={styles.separationLine} />
  </View>
)

export default SeparationLine
