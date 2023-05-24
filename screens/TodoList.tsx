import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../redux/slices/todoSlice'
import { AppDispatch, StateType, store } from '../redux'
import { Todo } from '../models/Todo'
const TodoList = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error, todos } = useSelector((state: StateType) => state.todosSlice)
    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const refresh = () => {
        dispatch(getTodos())
    }
    return (
        loading == 'pending' ? <ActivityIndicator /> :
            <>
                <FlatList
                    // refreshing={false}
                    refreshing={false}
                    onRefresh={refresh}
                    data={todos}
                    renderItem={({ item }: any) => (
                        <Text>{item.title}</Text>
                    )}
                />
                {
                    error &&
                    <Text>{error}</Text>
                }
            </>

    )
}

export default TodoList

const styles = StyleSheet.create({})