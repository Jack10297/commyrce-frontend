import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartList: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			let index = state.cartList.findIndex(item => item.name === action.payload.name)
			// if element already exist do not add duplicate to cart
			if (index !== -1) {
				state.cartList.splice(index, 1, action.payload)	
				return;
			}
			state.cartList.push(action.payload)
		},
		removeFromCart: (state, action) => {
			let index = state.cartList.indexOf(action.payload)
			state.cartList.splice(index, 1)
		}
	}
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer