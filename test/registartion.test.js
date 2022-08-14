import React from 'react';
import { screen, render, fireEvent, cleanup, waitFor, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from '../src/components/Authentications/RegisterUser';
import user from '@testing-library/user-event';
import registerReducer, { setToken } from '../src/redux/features/registerReducer';
import api from '../utils/api';

describe('findByText Examples', () => {
  test('should show a required field warning for each empty input field', async () => {
    render(<Signup />);
    const submit = screen.getByTestId('Create account');
    user.click(submit);
    expect(submit.disabled).toBe(true);
    expect(await screen.findByText('Please enter your first name is required')).toBeVisible();
    expect(await screen.findByText('Please enter your last name is required')).toBeVisible();
    expect(await screen.findByText('Please enter your username is equired')).toBeVisible();
    expect(await screen.findByText('Please enter a valid email')).toBeVisible();
    expect(
      await screen.findByText(
        'Password must at least contain one uppercase & lowercase letter, number, special character and at least 8 characters'
      )
    ).toBeVisible();
  });
});

test('button should be disabled', () => {
  const { getByText } = render(<Signup />);
  const button = getByText('Create account');
  expect(button.disabled).toBe(false);
});

describe('Auth reducers', () => {
  test('Should return  initial state ', () => {
    expect(registerReducer(undefined, {})).toEqual({
      token: null,
    });
  });
  test('Should handle register pending state', () => {
    const previousState = {};
    expect(registerReducer(previousState, setToken())).toEqual({
      token: undefined,
    });
  });
});

describe('it should test the axios', () => {
  test('testing api call', () => {
    const sampleObj = { Message: 'User created' };
    api.post('api/v1/user/register').then((res) => {
      if (res.status === 201) {
        window.location.replace('/');
        expect(res.data.Message).toMatchObject(sampleObj);
      }
    });
  });
});
