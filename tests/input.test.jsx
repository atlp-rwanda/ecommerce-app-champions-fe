import React from 'react';
import { expect, describe, it } from 'vitest';
import { render, screen } from './setup';
import Input from '../src/components/Auth/Input';

describe('Input component', () => {
	it('should render same text passed into label prop', async () => {
		render(<Input placeholder="Enter email address" />);
		expect(
			screen.getByPlaceholderText(/Enter email address/i)
		).toBeInTheDocument();
	});
});
