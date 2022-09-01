import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    token: null,
  },
  reducers: {
    getAllnotifications: (state, notifications) => ({
      ...state,
     notifications,
    }),
    getSingleNotifications: (state, notifications) => ({
      ...state,
      notifications,
    }),
  },
});

export const { getAllnotifications, getSingleNotifications } = notificationSlice.actions;
export const thisNotification = (state) => state.getNotification;

export default notificationSlice.reducer;