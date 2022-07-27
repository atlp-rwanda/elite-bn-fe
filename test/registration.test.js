import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Signup from '../src/components/Authentications/RegisterUser'

test('button should be disabled', () => {
  const { getByText } = render(<Signup />)
  const button = getByText('Create account')
  expect(button.disabled).toBe(false)
})

describe('it should get all input', () => {
  test('it should get FIRST NAME input in registration form', () => {
    render(<Signup />)

    const Registration = screen.getByText('Enter your First name')
    expect(Registration).toBeInTheDocument()
  })
  test('it should get LAST NAME input in registration form', () => {
    render(<Signup />)

    const Registration = screen.getByText('Enter your Last name')
    expect(Registration).toBeInTheDocument()
  })
  test('it should get USERNAME input in registration form', () => {
    render(<Signup />)

    const Registration = screen.getByText('Enter your Username')
    expect(Registration).toBeInTheDocument()
  })
  test('it should get EMAIL input in registration form', () => {
    render(<Signup />)

    const Registration = screen.getByText('Email')
    expect(Registration).toBeInTheDocument()
  })
  test('it should get PASSWORD input in registration form', () => {
    render(<Signup />)

    const Registration = screen.getByText('Enter your password')
    expect(Registration).toBeInTheDocument()
  })
  afterEach(cleanup)
})
