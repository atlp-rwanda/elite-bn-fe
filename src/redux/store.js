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
import roleSlice from './features/roleReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, counterReducer)
const persistRegister = persistReducer(persistConfig, authRegistration)
const persistLogin = persistReducer(persistConfig, authLogin)
const persistRole = persistReducer(persistConfig, roleSlice)

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
    Token: persistRegister,
    Token: persistLogin,
    roles: persistRole
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

export const persistor = persistStore(store)
