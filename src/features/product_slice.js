import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  productData: null,
  getProductDataLoading: false,
  updateProductLoading: false,
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
    setUpdateProductLoading: (state, action) => {
      state.updateProductLoading = action.payload
    },
  },
})

export const { setProductData, setGetProductDataLoading, setUpdateProductLoading } =
  productReducer.actions

export default productReducer.reducer
