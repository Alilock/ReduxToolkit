import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Blog } from "../../models/Blog";
import axios from "axios";
import axiosInstance from "../../service/axiosInstance";
import { create } from "react-test-renderer";
import { useSelector } from "react-redux";
import { RootState } from "..";

interface initialStateType {
    loading: 'rejected' | 'fulfilled' | 'pending' | null,
    blogs: Array<Blog>,
    error: any | null,
    blog: Blog | null
}

const initialState: initialStateType = {
    loading: null,
    blogs: [],
    error: null,
    blog: null
}

export const getAllBlogs = createAsyncThunk('getAll/blogs', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://64731455d784bccb4a3c3e14.mockapi.io/blogs')

        return response.data
    } catch (error: any) {

        rejectWithValue(error)
    }
})

export const getById = createAsyncThunk('getById/blogs', async (id: number, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`blogs/${id}`)
        return response.data
    } catch (error: any) {
        rejectWithValue(error.message)
    }
})

export const deleteBlog = createAsyncThunk('delete/blogs', async (id: number, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.delete(`blogs/${id}`)
        return response.data
    } catch (error) {

    }
})

export const updateBlog = createAsyncThunk('update/blogs', async (payload: Blog, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.put(`blogs/${payload.id}`, payload)
        return response.data
    } catch (error) {

    }
})

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBlogs.pending, (state) => {
            state.loading = 'pending'
        }).addCase(getAllBlogs.rejected, (state, action) => {
            state.loading = 'rejected'
            state.error = action.payload

        }).addCase(getAllBlogs.fulfilled, (state, action) => {
            state.loading = 'fulfilled',
                state.blogs = action.payload
        })

        builder.addCase(getById.pending, (state) => {
            state.loading = 'pending'
        }).addCase(getById.rejected, (state) => {
            state.loading = 'rejected'
        })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = 'fulfilled',
                    state.blog = action.payload
            })

        builder.addCase(deleteBlog.pending, (state) => {
        })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.blogs = state.blogs.filter(b => b.id != action.payload.id)
            })
        builder.addCase(updateBlog.pending, (state) => {
            state.loading = 'pending'
        }).addCase(updateBlog.rejected, (state, action) => {
            state.loading = 'rejected'
            state.error = action.payload

        }).addCase(updateBlog.fulfilled, (state, action) => {
            state.loading = 'fulfilled'


            const newblogs: Array<Blog> = state.blogs.map(b => {
                if (b.id == action.payload.id) {
                    b = action.payload
                }
                return b
            })

            state.blogs = newblogs


            state.blog = action.payload

        })
    }

})


export const getBlog = (state: RootState) => state.blogSlice.blog

export default blogSlice.reducer