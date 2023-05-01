import React from 'react';
import { expect, describe, it } from 'vitest';
import { render, screen } from './setup';
import Button from '../src/components/Button/Button';

describe('Button component', () => {
	it('should render same text passed into label prop', async () => {
		render(<Button label="Register" />);
		expect(screen.getByText(/Register/i)).toBeInTheDocument();
		expect(screen.getByText(/Register/i)).toBeVisible();
		expect(screen.getByText(/Register/i)).toContainHTML('button');
		expect(await screen.findByText(/Register/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});
