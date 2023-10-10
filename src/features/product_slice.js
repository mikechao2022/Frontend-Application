import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  productData: null,
  getProductDataLoading: false,
}

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.productData = action.payload
    },
    setGetProductDataLoading: (state, action) => {
      state.getProductDataLoading = action.payload
    },
  },
})

export const { setProductData, setGetProductDataLoading } = productReducer.actions

export default productReducer.reducer
