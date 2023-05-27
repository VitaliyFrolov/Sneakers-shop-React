import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        preparedKeys: []
    },
    reducers: {
        addPreparedKey: (state, action) => ({
            ...state,
            preparedKeys: [...state.preparedKeys, action.payload]
        })
    }
})

export const {addPreparedKey} = CartSlice.actions; 
export default CartSlice.reducer;