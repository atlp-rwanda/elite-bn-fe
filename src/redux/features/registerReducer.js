import { createSlice } from '@reduxjs/toolkit'

const authReducer = createSlice({
  name: 'user',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      const token = action.payload
      state.token = token
    },
  },
})

export const { setToken } = authReducer.actions
export default authReducer.reducer
