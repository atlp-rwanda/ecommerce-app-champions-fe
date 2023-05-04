import { test, describe, expect } from 'vitest';
import { fireEvent, render, screen } from './setup';
import BuyerSignupPage from '../src/pages/BuyerSignupPage';
import VendorSignupPage from '../src/pages/VendorSignupPage';

const buyer = {
	firstName: 'champs',
	lastName: 'champions',
	email: 'championsatlp@gmail.com',
	password: 'champs@12hf',
};

const vendor = {
	firstName: 'champpals',
	lastName: 'champions26',
	email: 'championsatlp26@gmail.com',
};

describe('signup page', () => {
	test('should render buyer signup page', () => {
		render(<BuyerSignupPage />);
		expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 3, name: 'Create Account' })
		).toBeInTheDocument();
		fireEvent.change(
			screen.getByLabelText(/First Name/i, { selector: 'input' }),
			{
				target: { value: buyer.firstName },
			}
		);
		fireEvent.change(
			screen.getByLabelText(/Last Name/i, { selector: 'input' }),
			{
				target: { value: buyer.lastName },
			}
		);
		fireEvent.change(screen.getByLabelText(/Email/i, { selector: 'input' }), {
			target: { value: buyer.email },
		});
		fireEvent.change(
			screen.getByLabelText(/Password/i, { selector: 'input' }),
			{ target: { value: buyer.password } }
		);
		const buttonElement = screen.getByRole('button', { name: 'Register' });
		fireEvent.click(buttonElement);
	});

	test('should render vendor signup page', () => {
		render(<VendorSignupPage />);
		expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 3, name: 'Create Account' })
		).toBeInTheDocument();
		fireEvent.change(
			screen.getByLabelText(/First Name/i, { selector: 'input' }),
			{
				target: { value: vendor.firstName },
			}
		);
		fireEvent.change(
			screen.getByLabelText(/Last Name/i, { selector: 'input' }),
			{
				target: { value: vendor.lastName },
			}
		);
		fireEvent.change(screen.getByLabelText(/Email/i, { selector: 'input' }), {
			target: { value: vendor.email },
		});
		const buttonElement = screen.getByRole('button', { name: 'Register' });
		fireEvent.click(buttonElement);
	});
});
