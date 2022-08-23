import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import { persistor, store } from './redux/store'
import './styles/index.scss'
import Paper from '@material-ui/core/Paper'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme/theme'


import { createTheme } from '@mui/material/styles'
const THEME = createTheme({
  typography: {
    fontFamily: `Montserrat`,
  },
})

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Paper style={{ height: '0vh', width: '98vw' }}>
            <App tab="home" />
          </Paper>
        </PersistGate>
      </Provider>
    </StrictMode>
  </ThemeProvider>
)
