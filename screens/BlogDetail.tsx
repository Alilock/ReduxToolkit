import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux'
import { getBlog, getById } from '../redux/slices/BlogSlice'

const BlogDetail = ({ route, navigation }: any) => {
    const { id } = route.params
    const dispatch = useDispatch<AppDispatch>()
    const uri = `https://loremflickr.com/640/480/landscape?random=${Math.floor(Math.random() * 100)}`
    useEffect(() => {
        dispatch(getById(id))
    }, [])
    const gotoEdit = () => {
        navigation.navigate('EditBlog')
    }
    const { blog, loading } = useSelector((state: RootState) => state.blogSlice)

    return (
        loading == 'pending' ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator /></View>
            : <View>
                <Image source={{ uri: uri }} style={{ width: "100%", height: 300 }} />
                <Text>{blog?.title}</Text>
                <Text>{blog?.description}</Text>
                <Button title='Edit' onPress={gotoEdit} />
            </View>
    )
}

export default BlogDetail

const styles = StyleSheet.create({})