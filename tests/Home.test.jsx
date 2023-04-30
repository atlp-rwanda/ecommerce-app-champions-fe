import { test, describe, expect } from 'vitest';
import { render, screen } from './setup';
import BuyerSignupPage from '../src/pages/BuyerSignupPage';

describe('Home', () => {
	test('hompepage test', () => {
		render(<BuyerSignupPage />);
		expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
		expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'Register' })
		).toBeInTheDocument();
	});
});
