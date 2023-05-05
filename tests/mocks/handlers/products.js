import { rest } from 'msw';
import envkeys from '../../../src/constants/keys';

const url = envkeys.APP_URL;

export const productsHandlers = [
	rest.get(`${url}/api/product/getAvailable`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({ Message: 'products found', status: 200 }),
			ctx.delay(100)
		);
	}),
];
