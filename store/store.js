import { configureStore } from '@reduxjs/toolkit'

import stateSlice from './slices/stateSlice'
import piecesSlice from './slices/piecesSlice'
import cartSlice from './slices/cartSlice'
import productSlice from './slices/productSlice'

export const store = configureStore({
  reducer: {
    test: stateSlice,
    pieces: piecesSlice,
    cart: cartSlice,
    product: productSlice
  },
})