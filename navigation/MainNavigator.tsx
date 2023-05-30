import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, Theme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import { RootState } from '../redux'
import BlogStack from './stack/BlogStack'
import ThemeScreeen from '../screens/ThemeScreeen'
const Tab = createBottomTabNavigator()

const MainNavigator = () => {
    const dark = useSelector((state: RootState) => state.themeSlice.dark)
    const theme: Theme = {
        dark: dark,
        colors: {
            background: dark ? '#1c1c1c' : '#fff',
            text: "blue",
            primary: "yellow",
            card: 'violet',
            border: 'green',
            notification: 'red'
        },

    }
    console.log('theme', dark);

    return (
        <NavigationContainer theme={theme}>
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name='Blog' component={BlogStack} />
                <Tab.Screen name='Theme' component={ThemeScreeen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})