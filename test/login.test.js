import React from 'react'
import { screen, render, fireEvent, cleanup, getByText } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '../src/components/Authentications/login'
import userEvent from '@testing-library/user-event'
import loginRedu, { setToken } from '../src/redux/features/login'

describe('Login tests ', () => {
  test('should tell for an empty input field', async () => {
 
  })


describe('Auth reducers', () => {
  test('Should return  initial state ', () => {
    expect(loginRedu(undefined, {})).toEqual({
      token: null,
    })
  })
  test('Should handle login pending state', () => {

    const previousState = {};
    expect(loginRedu(previousState, setToken())).toEqual({
      token: undefined,
    })
  
})
})
})

