// shopping cart
import { createSlice } from '@reduxjs/toolkit'

const initialState = { cart: {} }

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { productId, amount } = action.payload;
            state.cart[productId] = amount;
        },
    },
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer
