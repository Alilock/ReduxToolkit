import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TodoList from './screens/TodoList'
import { store } from './redux'
import { Provider } from 'react-redux'
import CreateTodo from './screens/CreateTodo'
const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Todos' component={TodoList} />
          <Tab.Screen name='Create' component={CreateTodo} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})