import React from 'react'
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dboard from '../src/Layouts/DashboardLayout'

describe('Dashboard testing Unit', () => {
  let buttonText = 'Profile'

  afterEach(cleanup)

  test('renders button and then we try to click it', () => {
    const { getByText } = render(<Dboard />)

    expect(getByText(buttonText)).toBeInTheDocument()

    fireEvent.click(getByText(buttonText))
  })
})
