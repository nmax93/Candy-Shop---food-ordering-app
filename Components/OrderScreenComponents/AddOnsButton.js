import React, { Component } from 'react'
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
    margin: 3,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  addOnsImage: {
    flex: 1,
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginLeft: '90%',
    position: 'absolute',
    marginTop: 15
  },
  container: {
    padding: 15,
    flexDirection: 'row'
  }
})

export default class AddOnsButton extends Component {
  constructor(props) {
    super(props)
    this.handleShowAddOnsButton = this.handleShowAddOnsButton.bind(this)
  }

  static propTypes = {
    controller: PropTypes.object.isRequired
  }

  handleShowAddOnsButton() {
    this.props.controller.current.showAddOnsList()
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.handleShowAddOnsButton()}>
        <Text style={styles.text}>Add ons:</Text>
        <Image style={styles.addOnsImage} source={require('../../Images/list_arrow.png')} />
      </TouchableOpacity>
    )
  }
}
