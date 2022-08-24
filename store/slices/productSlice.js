import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	productList: []
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addToProductList: (state, action) => {
			state.productList = [...action.payload]
		}
	}
})

export const {addToProductList} = productSlice.actions;
export default productSlice.reducer;

