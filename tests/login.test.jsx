import React from 'react';
import { expect, describe, it } from 'vitest';
import { render, screen } from './setup';
import LoginPage from '../src/pages/LoginPage';

describe('Home', () => {
	it('should render This is login ', () => {
		render(<LoginPage />);
		const emailInput = screen.getByPlaceholderText('Email Address');
		const passwordInput = screen.getByPlaceholderText('Password');
		const loginButton = screen.getByText('Login');
		const googleButton = screen.getByText('Sign in with Google');
		const forgotPasswordLink = screen.getByText('Forgot password');

		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(loginButton).toBeInTheDocument();
		expect(googleButton).toBeInTheDocument();
		expect(forgotPasswordLink).toBeInTheDocument();
	});
});
