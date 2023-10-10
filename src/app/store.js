import { configureStore } from "@reduxjs/toolkit"
import appReducer from "features/app_slice"
import productReducer from "features/product_slice"

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
  },
})
