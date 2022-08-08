import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        nationality: '',
        department: '',
        preferredLanguage: '',
        preferredCurrency: '',
        lineManager: '',
<<<<<<< HEAD
<<<<<<< HEAD
         phone: '',
=======
        phone: '',
>>>>>>> feat(user profiles):user should be view and edit their profiles
=======
         phone: '',
>>>>>>> feat(user profile):user should be able to view and edit profile preferences
        birthdate: '',
      },
    },
  },
  reducers: {
    getProfileData: (state, profile) => ({
      ...state,
      profile,
    }),
    updateProfileData: (state, profile) => ({
      ...state,
      profile,
    }),
  },
});

export const { getProfileData, updateProfileData } = profileSlice.actions;
export const thisUser = (state) => state.getProfile;

export default profileSlice.reducer;
