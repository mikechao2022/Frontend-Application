import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedProduct: null,
}

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload
    },
  },
})

export const { setSelectedProduct } = productReducer.actions

export default productReducer.reducer
