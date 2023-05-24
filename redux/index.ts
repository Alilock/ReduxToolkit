import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";


export const store = configureStore({
    reducer: {
        todosSlice: todoSlice
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>
