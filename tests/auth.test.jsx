import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
	render,
	screen,
	fireEvent,
	waitFor,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import { expect, describe, it, vitest } from 'vitest';
import { act } from 'react-dom/test-utils';
import store from '../src/redux/store';
import TwoFactorAuth from '../src/pages/Two-factor-auth';
import Login from '../src/pages/LoginPage';
import SuccessCheckmark from '../src/components/checkMark/successCheckMark';
import FailCheckmark from '../src/components/checkMark/errorCheckMark';
import App from '../src/App';
import Header from '../src/components/Header';
import HomePage from '../src/pages/HomePage';

// import axios from 'axios';

// vitest.mock('axios');

// axios.post.mockImplementation((url) => {
// 	switch (url) {
// 		case 'https://ecommerce-champions.onrender.com/api/user/login':
// 			return Promise.resolve({
// 				data: {
// 					firstName: 'matabaro',
// 					hashedOTP: 'xdvdvdxv',
// 					encodedOTP: 'dvdvdvdvsvdvddv',
// 					user: 1,
// 					token: 'dsfsetryjukji',
// 				},
// 			});
// 		case `http://localhost:5050/api/user/validate/dsfsetryjukji`:
// 			return Promise.resolve({
// 				data: {
// 					status: 'success',
// 					token: 'kiuhuininuihiuiu',
// 					message: 'authentication was success',
// 					firstName: 'matabaro',
// 					email: 'bob@yopmail.com',
// 					RoleId: 2,
// 					role: 'vendor',
// 				},
// 			});
// 		default:
// 			return Promise.reject(new Error('request fail'));
// 	}
// });

describe('TwoFactorAuth', () => {
	it('should render TwoFactorAuth component', () => {
		act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<TwoFactorAuth />
					</BrowserRouter>
				</Provider>
			);
		});
		const twofactorpage = screen.getByTestId('twofactorpage');
		expect(twofactorpage).toBeInTheDocument();
		expect(screen.getByPlaceholderText('0')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('1')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('2')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('3')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('4')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('5')).toBeInTheDocument();
	});
	it('should render success check mark', () => {
		act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<SuccessCheckmark />
					</BrowserRouter>
				</Provider>
			);
		});
		expect(screen.getByText(/verification success/i)).toBeInTheDocument();
	});
	it('should render fail check mark', () => {
		act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<FailCheckmark error="failed" />
					</BrowserRouter>
				</Provider>
			);
		});
		expect(screen.getByText(/failed/i)).toBeInTheDocument();
	});
});
