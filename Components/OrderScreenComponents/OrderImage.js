import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: '100%'
  }
})

export default class OrderImage extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  }

  render() {
    return <Image style={styles.image} source={{ uri: this.props.url }} />
  }
}
