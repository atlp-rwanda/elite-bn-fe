import React from 'react'
import { render } from '@testing-library/react'

import App from '../src/components/App'
import Logout from '../src/components/logout'


test('Initial render, Welcome to BareFoot Nomad frontEnd Tests', () => {
  render(<App />)
})



test('It should test all logout  lines', () => {
  render(<Logout />)
})
