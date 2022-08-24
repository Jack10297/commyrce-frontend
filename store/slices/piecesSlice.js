import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 1
}
export const piecesSlice = createSlice({
	name: 'pieces',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		}, 
		decrement: (state) => {
			if(state.value === 1) {
				return;
			}
			state.value -= 1
		}
	}
})


export const {increment, decrement} = piecesSlice.actions;
export default piecesSlice.reducer;
