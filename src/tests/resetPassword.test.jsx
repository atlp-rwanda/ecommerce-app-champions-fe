/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { render } from '../../tests/setup';
import ResetPassword from '../pages/ResetPassword';

describe('Reset Password component', () => {
	it('should dispay password input field', () => {
		render(<ResetPassword />);
		const PasswordField = screen.getByPlaceholderText('password');
		expect(PasswordField).toBeInTheDocument();
	});
	it('should dispay  confirm password input field', () => {
		render(<ResetPassword />);
		const confirmPasswordField = screen.getByPlaceholderText('password');
		expect(confirmPasswordField).toBeInTheDocument();
	});

	it('should dispay reset password button ', () => {
		render(<ResetPassword />);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	it('should render the ResetPassword component', () => {
		render(<ResetPassword />);
		const component = screen.getByRole('heading');
		expect(component).toBeInTheDocument();
	});
	it('should enable the reset password button if password and confirm password fields are filled', () => {
		render(<ResetPassword />);
		const passwordField = screen.getByPlaceholderText('password');
		const confirmPasswordField =
			screen.getByPlaceholderText('confirm password');
		const button = screen.getByRole('button', { name: /Submit/i });

		expect(button).not.toBeDisabled();

		fireEvent.change(passwordField, { target: { value: 'password123' } });
		expect(button).not.toBeDisabled();

		fireEvent.change(confirmPasswordField, {
			target: { value: 'password123' },
		});
		expect(button).toBeEnabled();
	});
});
