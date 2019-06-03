import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'
import AddOn from './AddOn'
import PropTypes from 'prop-types'

const Window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: Window.height,
    width: Window.width
  },
  dark: { backgroundColor: 'black' },
  transparent: { opacity: 0 },
  list: {
    height: 260,
    width: '100%',
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'Arial',
    margin: 3,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  titleContainer: {
    padding: 8,
    paddingLeft: 15,
    backgroundColor: '#ECECEC'
  }
})

export default class AddOnsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false,
      pan: new Animated.ValueXY({ x: 0, y: Window.height - 75 }),
      opacity: new Animated.Value(0)
    }
    this.hideAddOnsList = this.hideAddOnsList.bind(this)
    this.mapAddOns = this.mapAddOns.bind(this)
  }

  static propTypes = {
    addOns: PropTypes.array.isRequired
  }

  showAddOnsList() {
    Animated.parallel([
      Animated.timing(this.state.pan, {
        toValue: { x: 0, y: Window.height - 335 },
        duration: 250
      }),
      Animated.timing(this.state.opacity, {
        toValue: 0.5,
        duration: 250
      })
    ]).start(() => {
      this.setState({ display: true })
    })
  }

  hideAddOnsList() {
    Animated.parallel([
      Animated.timing(this.state.pan, {
        toValue: { x: 0, y: Window.height },
        duration: 250
      }),
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 250
      })
    ]).start(() => {
      this.setState({ display: false })
    })
  }

  mapAddOns() {
    let count = 0
    const addOns = this.props.addOns.map(item => {
      return <AddOn key={count++} name={item.name} price={item.price} />
    })
    return addOns
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View id="dark background" style={{ opacity: this.state.opacity }}>
          <View style={[styles.container, styles.dark]} />
        </Animated.View>
        {this.state.display && (
          <TouchableWithoutFeedback id="touch to hide list" onPress={() => this.hideAddOnsList()}>
            <View style={[styles.container, styles.transparent]} />
          </TouchableWithoutFeedback>
        )}
        <Animated.View id="list" style={[this.state.pan.getLayout(), styles.list]}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>AVAILABLE ADD ONS</Text>
          </View>
          <ScrollView>{this.mapAddOns()}</ScrollView>
        </Animated.View>
      </View>
    )
  }
}
