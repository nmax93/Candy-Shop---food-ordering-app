import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreen from '../Screens/MainScreen'
import CheckOutScreen from '../Screens/CheckOutScreen'
import OrderScreen from '../Screens/OrderScreen'
import ConfirmationScreen from '../Screens/ConfirmationScreen'
import { StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  logo: {
    height: 55,
    width: 55,
    marginLeft: '65%'
  }
})

const NavigationOptions = {
  headerTitle: 'Candy Shop',
  headerLeft: null,
  headerBackground: <Image style={styles.logo} source={require('../Images/candy_cane.png')} />,
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1,
    fontSize: 26,
    color: 'white'
  },
  headerStyle: {
    backgroundColor: '#e91d63',
    height: 55
  }
}

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: NavigationOptions
  },
  CheckOutScreen: {
    screen: CheckOutScreen,
    navigationOptions: NavigationOptions
  },
  OrderScreen: {
    screen: OrderScreen,
    navigationOptions: NavigationOptions
  },
  ConfirmationScreen: {
    screen: ConfirmationScreen,
    navigationOptions: NavigationOptions
  }
})

export default createAppContainer(AppNavigator)
