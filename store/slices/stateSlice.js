import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "sample"
}

export const stateSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		increment: (state, action) => {
			state.value = action.payload.name
		}
	}

})

export const {increment} = stateSlice.actions

export default stateSlice.reducer