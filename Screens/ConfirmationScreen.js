import React, { Component } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import ConfirmationMessage from '../Components/ConfirmationScreenComponents/ConfirmationMessage'
import HorizontalScroll from '../Components/ConfirmationScreenComponents/HorizontalScroll'
import Lollipop from '../Components/ConfirmationScreenComponents/Lollipop'
import PrettyButton from '../Components/PrettyButton'
import PropTypes from 'prop-types'

const Window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Window.height,
    width: Window.width,
    backgroundColor: 'gainsboro',
    position: 'absolute',
    paddingBottom: 30
  },
  lollipop: { top: '25%' },
  horizontalScroll: { top: '22%' },
  button: { top: '73%' }
})

export default class CheckOutScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <ConfirmationMessage />
        <View style={styles.lollipop}>
          <Lollipop />
        </View>
        <View style={styles.horizontalScroll}>
          <HorizontalScroll navigation={navigation} />
        </View>
        <View style={styles.button}>
          <PrettyButton
            text="CONTINUE SHOPPING"
            onPress={() => navigation.navigate('MainScreen')}
          />
        </View>
      </View>
    )
  }
}
