import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux'
import { Blog } from '../models/Blog'
import { updateBlog } from '../redux/slices/BlogSlice'
import { useNavigation } from '@react-navigation/native'

const EditBlog = () => {
    const blog: Blog = useSelector<RootState, any>(state => state.blogSlice.blog)
    const navigation = useNavigation()
    const [title, setTitle] = useState<string>(blog.title)
    const [desc, setDesc] = useState<string>(blog.description)
    const dispatch = useDispatch<AppDispatch>()

    const updateHandler = () => {
        const payload: Blog = {
            title: title,
            description: desc,
            id: blog.id,
        }
        dispatch(updateBlog(payload))
        navigation.goBack()

    }
    return (
        <View style={{ paddingHorizontal: 16, gap: 8 }}>
            <TextInput placeholder='title' onChangeText={setTitle} value={title} style={{ padding: 10, borderWidth: 1, borderColor: 'black' }} />
            <TextInput placeholder='description' onChangeText={setDesc} value={desc} style={{ padding: 10, borderWidth: 1, borderColor: 'black' }} />
            <Button title='update' onPress={updateHandler} />
        </View>
    )
}

export default EditBlog

const styles = StyleSheet.create({})