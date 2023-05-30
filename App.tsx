import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, Theme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider, useSelector } from 'react-redux'
import BlogStack from './navigation/stack/BlogStack'
import store, { RootState } from './redux'
import MainNavigator from './navigation/MainNavigator'

const App = () => {



  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})