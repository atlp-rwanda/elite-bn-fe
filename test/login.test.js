import React from 'react'
import { render } from '@testing-library/react'
import { ReactDOM } from 'react-dom'

import App from '../src/components/App'

test('Initial render, Welcome to BareFoot Nomad frontEnd Tests', () => {
  render(<App />)
})
