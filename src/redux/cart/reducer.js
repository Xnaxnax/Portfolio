import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    itemsInCart: [],
}

export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        pushInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            state.itemsInCart.splice(state.itemsInCart.findIndex((arrow) => arrow.id === action.payload), 1);
        }
    }
})

export default cartReducer.reducer;

export const { pushInCart, deleteFromCart } = cartReducer.actions