import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducer";
import productReducer from "./Reducers/prodReducer";
export const store = configureStore({
    reducer: {
        user: authReducer,
        products: productReducer
    },
})