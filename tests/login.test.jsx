import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import Login from '../src/pages/Login';
import store from '../src/redux/store';

describe('Home', () => {
	it('should render This is login ', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</Provider>
		);
		const emailInput = screen.getByPlaceholderText('Email Address');
		const passwordInput = screen.getByPlaceholderText('Password');
		const loginButton = screen.getByText('Login');
		const googleButton = screen.getByText('Sign in with Google');
		const signupLink = screen.getByText('Signup');
		const forgotPasswordLink = screen.getByText('Forgot password');

		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(loginButton).toBeInTheDocument();
		expect(googleButton).toBeInTheDocument();
		expect(signupLink).toBeInTheDocument();
		expect(forgotPasswordLink).toBeInTheDocument();
	});
});
