import { rest } from 'msw';
import envkeys from '../../../src/constants/keys';

const url = envkeys.APP_URL;

export const authHandlers = [
	rest.post(`${url}/api/buyer/signup`, (req, res, ctx) => {
		return res(
			ctx.status(201),
			ctx.json({ Message: 'User created', status: 201 }),
			ctx.delay(100)
		);
	}),
];
