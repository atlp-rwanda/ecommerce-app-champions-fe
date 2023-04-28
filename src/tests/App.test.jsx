import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import LoginPage from '../pages/Signup';

describe('Home', () => {
	// it('should render This is login page', () => {
	// 	render(
	// 		<BrowserRouter>
	// 			<Login />
	// 		</BrowserRouter>
	// 	);
	// 	const emailInput = screen.getByPlaceholderText('Email');
	// 	const passwordInput = screen.getByPlaceholderText('Password');
	// 	const loginButton = screen.getByText('Login');
	// 	const googleButton = screen.getByText('Sign in with Google');
	// 	const signupLink = screen.getByText('Signup');
	// 	const forgotPasswordLink = screen.getByText('Forgot password');

	// 	expect(emailInput).toBeInTheDocument();
	// 	expect(passwordInput).toBeInTheDocument();
	// 	expect(loginButton).toBeInTheDocument();
	// 	expect(googleButton).toBeInTheDocument();
	// 	expect(signupLink).toBeInTheDocument();
	// 	expect(forgotPasswordLink).toBeInTheDocument();
	// });

	it('should render This is login page', () => {
		render(<LoginPage />);

		const headline = screen.getByText(/This is login page/i);

		expect(headline).toBeInTheDocument();
	});
});
