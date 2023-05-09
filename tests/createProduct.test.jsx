import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import CreateProduct from '../src/pages/Createproduct';
import store from '../src/redux/store';

describe('vendor dashboard', () => {
	it('should render create product page ', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CreateProduct />
				</BrowserRouter>
			</Provider>
		);
		expect(screen.getByPlaceholderText('Owner')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Product name')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Product price')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('number of items')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('select date')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('category')).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText('enter amount here')
		).toBeInTheDocument();
		expect(screen.getByText('Add product')).toBeInTheDocument();
		expect(screen.getByText('Cancel')).toBeInTheDocument();
	});
});
