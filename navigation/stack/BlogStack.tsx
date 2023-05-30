import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Blogs from '../../screens/Blogs'
import BlogDetail from '../../screens/BlogDetail'
import EditBlog from '../../screens/EditBlog'

const Stack = createNativeStackNavigator()
const BlogStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Blogs' component={Blogs} />
            <Stack.Screen name='BlogDetail' component={BlogDetail} />
            <Stack.Screen name='EditBlog' component={EditBlog} />
        </Stack.Navigator>
    )
}

export default BlogStack

const styles = StyleSheet.create({})