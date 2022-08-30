import { createSlice } from '@reduxjs/toolkit'

export const roleSlice = createSlice({
  name: 'role',
  initialState: {
    role: {
      'super admin': '',
      'travel admin': '',
      host: '',
      manager: '',
      requester: '',
      supplier: '',
    },
  },
  reducers: {
    getUserRoleData: (state, role) => ({
      ...state,
      role,
    }),
    updateUserRoleData: (state, role) => ({
      ...state,
      role,
    }),
  },
})
export const { getUserRoleData, updateUserRoleData } = roleSlice.actions
export const thisUser = (state) => state.getRole
