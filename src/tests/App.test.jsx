<<<<<<< HEAD
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import Home from '../pages/Home';
import { render } from '../../tests/setup';

describe('Home', () => {
	it("should render Welcome to champion's ecommerce app", () => {
		render(<Home />);
		const headline = screen.getByText(/Welcome to champion's ecommerce app/i);
		expect(headline).toBeInTheDocument();
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';

describe('Home', () => {
	it('should render This is login page', () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
		const emailInput = screen.getByPlaceholderText('Email');
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
>>>>>>> 18243d3 (ft(two-factor-auth for sellers))
	});
});
