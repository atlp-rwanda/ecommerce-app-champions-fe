import React from 'react';
import { describe, it } from 'vitest';
import { render } from './setup';

import HomePage from '../src/pages/HomePage';

describe('Home', () => {
	it("should render Welcome to champion's ecommerce app", () => {
		render(<HomePage />);
	});
});
