import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ResetPassword } from '../src/components/password/ResetPassword'
import { ForgotPassword } from '../src/components/password/ForgotPassword'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

describe('Forgot-Password', () => {
  it('onSubmit is called when all fields pass validation', async () => {
    const onSubmit = jest.fn()
    const { getByTestId } = render(<ForgotPassword onSubmit={onSubmit} />)

    act(() => {
      const submit = screen.getByText(/submit/i)
      fireEvent.click(submit)
      expect(submit.disabled).toBe(false)
    })

    await waitFor(() => screen.getByRole('heading', { name: /User Email Address/i }))

    expect(screen.getByRole('textbox', { name: /enter your email/i })).toBeInTheDocument()
    const AddEmail = screen.getByRole('textbox', { name: /enter your email/i })
    fireEvent.click(AddEmail)

    expect(screen.getByRole('textbox', { name: /enter your email/i })).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Loading/i })).toBeInTheDocument()

    const change = screen.getByRole('textbox', { value: /enter your email/i })
    fireEvent.change(change, { target: { value: 'testing@gmail.com' } })

    fireEvent.click(screen.getByRole('textbox', { value: /enter your email/i }))

    await waitFor(() => expect(screen.queryByText(/submit/i)).toBeInTheDocument())

    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument())
    fireEvent.change(
      screen.getByRole('textbox', {
        name: /enter your email/i,
      })
    )
    expect(onSubmit).not.toHaveBeenCalled()
    await waitFor(() => fireEvent.submit(getByTestId('form')))
  })
})

describe('Reset-password', () => {
  test('should submit a reset password form ', async () => {
    const onSubmit = jest.fn()
    const { getByTestId } = render(
      <Router>
        <ResetPassword onSubmit={onSubmit} />
      </Router>
    )

    act(() => {
      const submit = screen.getByTestId('reset')
      fireEvent.click(submit)
      expect(submit.disabled).toBe(false)
    })

    const passwordInput = screen.getByLabelText(/enter password/i)

    expect(passwordInput).toBeInTheDocument()

    fireEvent.change(passwordInput, { target: { value: 'ezahjbhb' } })

    expect(passwordInput).toHaveValue('ezahjbhb')

    await waitFor(() =>
      expect(screen.getByRole('heading', { name: /add a new password/i })).toBeInTheDocument()
    )

    waitFor(() => {
      expect(getByText(/password is required/i)).toBeInTheDocument()
    })

    expect(screen.getByRole('button', { name: /Loading/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Loading/i }))

    await waitFor(() => expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument())

    expect(screen.getByTestId('form')).toBeInTheDocument()

    const result = screen.getByTestId('content-input')

    fireEvent.change(result, { target: { value: 'testinggmailcom' } })

    fireEvent.submit(getByTestId('form'))
  })
})
