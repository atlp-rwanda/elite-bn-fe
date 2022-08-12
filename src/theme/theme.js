import { createTheme } from '@material-ui/core/styles'

import { Colors } from './colors'

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  typography: {
    primary: {
      fontFamily: 'Roboto',
      fontSize: 14,
    },
    secondary: {
      fontFamily: 'Montserrat',
      fontSize: 14,
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        color: Colors.inputColor,
      },
    },
  },
})

export default theme
