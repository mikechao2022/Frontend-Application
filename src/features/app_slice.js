import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  appConfig: null,
  appConfigLoading: false,
}

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppConfig: (state, action) => {
      state.appConfig = action.payload
    },
    setAppConfigLoading: (state, action) => {
      state.appConfigLoading = action.payload
    },
  },
})

export const { setAppConfig, setAppConfigLoading } = appReducer.actions

export default appReducer.reducer
