import { ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux'
import { deleteBlog, getAllBlogs } from '../redux/slices/BlogSlice'

const Blogs = ({ navigation }: any) => {
    const dark = useSelector((state: RootState) => state.themeSlice.dark)

    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getAllBlogs())
    }, [])

    const gotoDetail = (id: number) => {
        navigation.navigate('BlogDetail', { id: id })
    }
    const deleteHandle = (id: number) => {
        dispatch(deleteBlog(id))
    }
    const { blogs, loading, error } = useSelector<RootState, any>(state => state.blogSlice)

    return (
        loading == 'pending' ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator /></View>
            : <FlatList
                data={blogs}
                contentContainerStyle={{
                    gap: 8
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => gotoDetail(item.id)} style={{ paddingHorizontal: 10, flexDirection: "row", alignItems: "center", gap: 8, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <Image source={{ uri: item.avatar }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                            <Text style={{ color: dark ? "#fff" : "#1c1c1c" }}>{item.title}</Text>
                        </View>
                        <Button title='delete' onPress={() => deleteHandle(item.id)}></Button>

                    </TouchableOpacity>
                )}
            />
    )
}

export default Blogs

const styles = StyleSheet.create({})