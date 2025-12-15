import { configureStore } from '@reduxjs/toolkit'
import Cartslice from "../slice/Cartslice"
import { WishSlice } from '../slice/wishlist'
export const store = configureStore({
  reducer: {

cart:Cartslice,
like:WishSlice

  },
})