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
	});
});
