import { test, describe, expect } from 'vitest';
import { render, screen } from './setup';
import HomePage from '../src/pages/HomePage';

describe('Home', () => {
	test('hompepage test', () => {
		render(<HomePage />);
		expect(screen.getByRole('link', { name: /Login/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Vendor/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Buyer/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
		expect(screen.getByText(/Fetching all Products/i)).toBeInTheDocument();
	});
});
