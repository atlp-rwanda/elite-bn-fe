import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import './styles/index.scss'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App tab="home" />
      </PersistGate>
    </Provider>
  </StrictMode>
)
