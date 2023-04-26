import React from 'react';
import { expect, describe, it } from 'vitest';
import { render, screen } from './setup';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

describe('Home', () => {
	it("should render Welcome to champion's ecommerce app", () => {
		render(<HomePage />);
		expect(screen.getByText(/Home/i)).toBeInTheDocument();
	});

	it('should render This is login page', () => {
		render(<LoginPage />);

		const headline = screen.getByText(/This is login page/i);

		expect(headline).toBeInTheDocument();
	});
});
