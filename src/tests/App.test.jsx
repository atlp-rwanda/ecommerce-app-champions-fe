import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import Home from '../pages/Home';
import Login from '../pages/Login';

describe('Home', () => {
	it("should render Welcome to champion's ecommerce app", () => {
		render(<Home />);

		const headline = screen.getByText(/Welcome to champion's ecommerce app/i);

		expect(headline).toBeInTheDocument();
	});

	it('should render This is login page', () => {
		render(<Login />);

		const headline = screen.getByText(/This is login page/i);

		expect(headline).toBeInTheDocument();
	});
});
