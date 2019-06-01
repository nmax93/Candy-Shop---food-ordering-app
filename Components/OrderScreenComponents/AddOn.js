import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import SeparationLine from '../SeparationLine'

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingLeft: 15,
    flexDirection: 'row'
  },
  text: {
    fontFamily: 'Arial',
    margin: 3,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  checkIcon: {
    height: 25,
    width: 25,
    position: 'absolute',
    marginLeft: '90%',
    marginTop: 12
  }
})

export default class AddOn extends Component {
  constructor(props) {
    super(props)
    this.state = { check: false }
    this.checkAddOn = this.checkAddOn.bind(this)
  }

  checkAddOn() {
    if (this.state.check === false) this.setState({ check: true })
    else this.setState({ check: false })
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.container} onPress={() => this.checkAddOn()}>
          <Text style={styles.text}>{this.props.name}</Text>
          {this.state.check && (
            <Image style={styles.checkIcon} source={require('../../Images/check.png')} />
          )}
        </TouchableOpacity>
        <SeparationLine />
      </View>
    )
  }
}
