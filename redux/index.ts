import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./slices/BlogSlice";
import ThemeSlice from "./slices/ThemeSlice";
const store = configureStore({
    reducer: {
        blogSlice: BlogSlice,
        themeSlice: ThemeSlice
    }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>