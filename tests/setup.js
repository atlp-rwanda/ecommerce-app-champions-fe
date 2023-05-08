import {
	expect,
	afterEach,
	beforeAll,
	afterAll,
	beforeEach,
	vitest,
} from 'vitest';
import { cleanup, render as rtlRender } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import reducers from '../src/redux/reducers/rootreducer';
import server from './mocks/server';

function render(
	ui,
	{
		preloadedState,
		store = configureStore({ reducer: { ...reducers }, preloadedState }),
		route = '/',
		...renderOptions
	} = {}
) {
	window.history.pushState({}, 'Initial Page', route);
	function Wrapper({ children }) {
		return (
			<Provider store={store}>
				<BrowserRouter>{children}</BrowserRouter>
			</Provider>
		);
	}
	return {
		user: userEvent.setup(),
		...store,
		...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
	};
}

let store = {};

beforeAll(async () => {
	global.Storage.prototype.setItem = vitest.fn((key, value) => {
		store[key] = value;
	});
	await server.listen();
});

beforeEach(() => {
	store = {};
});

afterEach(() => server.resetHandlers());

expect.extend(matchers);

afterEach(() => {
	cleanup();
});

afterAll(async () => {
	await server.close();
});

export * from '@testing-library/react';
export { render };
