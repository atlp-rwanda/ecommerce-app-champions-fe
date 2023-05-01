import React from 'react';
import { expect, describe, it } from 'vitest';
import { render, screen } from './setup';

import HomePage from '../src/pages/HomePage';

describe('Home', () => {
	it("should render Welcome to champion's ecommerce app", () => {
		render(<HomePage />);
		expect(screen.getByText(/Home/i)).toBeInTheDocument();
	});
});
