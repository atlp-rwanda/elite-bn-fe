import React from 'react';
import { screen, render, fireEvent, cleanup, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../src/components/Authentications/login';
import userEvent from '@testing-library/user-event';
import loginRedu, { setToken } from '../src/redux/features/login';

describe('Login tests ', () => {

  test('should tell for an empty input field', async () => {
    render(<Login />);
    const submit = screen.getByTestId('Sign in');
    userEvent.click(submit);
    expect(submit.disabled).toBe(false);
    expect(await screen.findByText('Email is required')).toBeVisible();
    expect(await screen.findByText('Password is required')).toBeVisible();


    const input = screen.getByLabelText('Enter your email');
    const passwordInput = screen.getByLabelText('Enter your password');

    fireEvent.change(input, {target: {value: 'email'}});

    userEvent.click(submit);
    expect(await screen.findByText('Please enter a valid email')).toBeVisible();
    
    fireEvent.change(input, {target: {value: 'email@gmail.com'}});
    userEvent.click(submit);
    expect(await screen.findByText('Password is required')).toBeVisible();

    fireEvent.change(passwordInput, {target: {value: 'eza'}});
    fireEvent.click(submit);
    expect(await screen.findByText('Password too short')).toBeVisible();

    fireEvent.change(input, {target: {value: 'wrong@gmail.com'}});
    fireEvent.change(passwordInput, {target: {value: 'helsjkd'}});
    fireEvent.click(submit);

    expect(await screen.findByText('Wrong email or password!')).toBeVisible();
    
    fireEvent.change(input, {target: {value: 'kalisa@gmail.com'}});
    fireEvent.change(passwordInput, {target: {value: 'kalisa@123'}});
    fireEvent.click(submit);

    expect(await screen.findByText('Loading')).toBeVisible();

  });

});

describe('Auth reducers', () => {
  test('Should return  initial state ', () => {
    expect(loginRedu(undefined, {})).toEqual({
      token: null,
    });
  });
  test('Should handle login pending state', () => {
    const previousState = {};
    expect(loginRedu(previousState, setToken())).toEqual({
      token: undefined,
    });
  });

});
