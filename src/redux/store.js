import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import logger from 'redux-logger'
import counterReducer from './counter'
import authRegistration from './features/registerReducer'
import authLogin from './features/login'
import alertSlice from './features/toastAlert'

import profileSlice from './features/profile'
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, counterReducer)
const persistRegister = persistReducer(persistConfig, authRegistration)
const persistLogin = persistReducer(persistConfig, authLogin)
const persistAlert = persistReducer(persistConfig, alertSlice)

const persistProfile=persistReducer(persistConfig,profileSlice)
export const store = configureStore({
  reducer: {
    counter: persistedReducer,
    Token: persistRegister,
    Token: persistLogin,
    alert: persistAlert,
    getProfile: persistProfile
  },

  devTools: process.env.NODE_ENV === 'development',


  middleware: (getDefaultMiddleware) =>
    (process.env.NODE_ENV === 'development' &&
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger)) ||
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);







