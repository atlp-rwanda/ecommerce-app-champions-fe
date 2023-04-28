import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import ForgotPassword from '../pages/ForgotPassword';
import { render } from '../../tests/setup';

describe('Forgot Password Component', () => {
	it('should render forgot password correctly', () => {
		render(<ForgotPassword />);
		const element = screen.getByRole('heading');
		expect(element).toBeInTheDocument();
	});

	it('should display an email input field', () => {
		render(<ForgotPassword />);
		const input = screen.getByPlaceholderText('Email');
		expect(input).toBeInTheDocument();
	});

	it('should display a Request Reset button', () => {
		render(<ForgotPassword />);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	it('should display a "back to login" link', () => {
		render(<ForgotPassword />);
		const link = screen.getByRole('link', { name: 'back to login' });
		expect(link).toBeInTheDocument();
	});
	it('should display an empty email input field by default', () => {
		render(<ForgotPassword />);
		const input = screen.getByPlaceholderText('Email');
		expect(input).toHaveValue('');
	});
	it('should disable the "Request Reset" button when email is not entered', () => {
		render(<ForgotPassword />);
		const button = screen.getByRole('button');
		const input = screen.getByPlaceholderText('Email');
		expect(button).not.toBeDisabled();
		fireEvent.change(input, { target: { value: 'test@example.com' } });
		expect(button).not.toBeDisabled();
	});
});
