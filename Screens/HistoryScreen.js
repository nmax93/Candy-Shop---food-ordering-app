import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native'
import TitleBar from '../Components/TitleBar'
import Loading from '../Components/Loading'
import HistoryOrder from '../Components/HistoryScreenComponents/HistoryOrder'
import { myAPIkey, myDatabase, myCollection, historyDocument } from '../consts'

const Window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
    minHeight: Window.height
  },
  emptySpace: {
    height: 50,
    width: '100%'
  }
})

export default class OrdersHistory extends Component {
  constructor(props) {
    super(props)
    this.state = { isReady: false, history: [] }
    this.getData = this.getData.bind(this)
    this.mapHistory = this.mapHistory.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    const url = `https://api.mlab.com/api/1/databases/${myDatabase}/collections/${myCollection}/${historyDocument}?apiKey=${myAPIkey}`
    fetch(`${url}`)
      .then(res => res.json())
      .then(data => this.setState({ history: data.history, isReady: true }))
      .catch()
  }

  mapHistory() {
    let count = 0
    const orders = this.state.history.map(item => {
      return <HistoryOrder key={count++} order={item} />
    })
    return orders
  }

  render() {
    if (this.state.isReady === true) {
      return (
        <View>
          <ScrollView style={styles.container}>
            <TitleBar title={this.state.history.length + ' orders'} />
            {this.mapHistory()}
            <View style={styles.emptySpace} />
          </ScrollView>
        </View>
      )
    }
    return <Loading />
  }
}
