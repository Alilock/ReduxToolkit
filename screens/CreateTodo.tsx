import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux'
import { Todo } from '../models/Todo'
import { postTodo } from '../redux/slices/todoSlice'

const CreateTodo = () => {
    const [todo, settodo] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()
    const addhandle = () => {
        const newData: Todo = {
            title: todo,
            completed: false

        }
        dispatch(postTodo(newData))
    }
    return (
        <View>
            <TextInput onChangeText={settodo} />
            <Button title='add' onPress={addhandle} />
        </View>
    )
}

export default CreateTodo

const styles = StyleSheet.create({})