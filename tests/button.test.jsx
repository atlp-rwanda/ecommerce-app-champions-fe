import React from 'react';
import { expect, describe, it } from 'vitest';
import { render, screen } from './setup';
import Button from '../src/components/Button/Button';
import GoogleButton from '../src/components/Button/GoogleButton';

describe('Button component', () => {
	it('should render same text passed into label prop', async () => {
		render(<Button label="Register" />);
		expect(screen.getByText(/Register/i)).toBeInTheDocument();
		expect(screen.getByText(/Register/i)).toBeVisible();
		expect(screen.getByText(/Register/i)).toContainHTML('button');
		expect(await screen.findByText(/Register/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should render login text  ', async () => {
		render(<Button label="Login" />);
		expect(screen.getByText(/Login/i)).toBeVisible();
		expect(screen.getByText(/Login/i)).toContainHTML('button');
		expect(await screen.findByText(/Login/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	it('should render same text passed into label prop', async () => {
		render(<GoogleButton label="Sign in with Google" />);
		expect(screen.getByText(/Sign in with Google/i)).toBeInTheDocument();
		expect(screen.getByText(/Sign in with Google/i)).toBeVisible();
		expect(screen.getByText(/Sign in with Google/i)).toContainHTML('button');
		expect(await screen.findByText(/Sign in with Google/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should render Add product  ', async () => {
		render(<Button label="Add product" />);
		expect(screen.getByText(/Add product/i)).toBeVisible();
		expect(screen.getByText(/Add product/i)).toContainHTML('button');
		expect(await screen.findByText(/Add product/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});
