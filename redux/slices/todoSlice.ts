import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../models/Todo";
import axios from "axios";
import { act } from "react-test-renderer";

interface TodoState {
    todos: Array<Todo>,
    loading: 'reject' | 'pending' | 'fullfilled' | null,
    error: any
}

const initialState: TodoState = {
    todos: [],
    loading: null,
    error: null
}

export const getTodos = createAsyncThunk('get/todos', async () => {
    const response = await axios.get("https://646dbeb69c677e23218a5678.mockapi.io/todos")
    return response.data
})

export const postTodo = createAsyncThunk('post/todos', async (payload: Todo) => {
    const response = await axios.post("https://646dbeb69c677e23218a5678.mockapi.io/todos", payload)
    return response.data
})

const todoSlice = createSlice({
    name: 'Todos',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTodos.pending, (state) => {
            state.loading = 'pending'
        }).addCase(getTodos.fulfilled, (state, action) => {
            state.loading = 'fullfilled',
                state.todos = action.payload
        }).addCase(getTodos.rejected, (state) => {
            state.loading = 'reject'
        })
        builder.addCase(postTodo.pending, (state) => {
            state.loading = 'pending'
        })
            .addCase(postTodo.fulfilled, (state, action) => {
                state.loading = 'fullfilled'
                state.todos.push(action.payload)

            })


    }

})

export default todoSlice.reducer