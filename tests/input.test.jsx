import React from 'react';
import { expect, describe, it } from 'vitest';
import { render, screen, fireEvent } from './setup';
import Input from '../src/components/Auth/Input';

describe('Input component', () => {
	it('should render input element and can get the value', async () => {
		render(<Input placeholder="Enter email address" />);
		const inputElement = screen.getByPlaceholderText(/Enter email address/i);
		expect(inputElement).toBeInTheDocument();
		fireEvent.change(inputElement, {
			target: { value: 'ngarukiyimanasostene@gmail.com' },
		});
		expect(inputElement.value).toBe('ngarukiyimanasostene@gmail.com');
	});
});
