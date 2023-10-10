import { configureStore } from "@reduxjs/toolkit"
import productReducer from "features/product_slice"

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
})
