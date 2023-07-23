import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/cartSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer, // עדכון הסלייס
        cart: cartReducer
    },
});
