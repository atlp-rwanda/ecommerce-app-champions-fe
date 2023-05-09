import { authHandlers } from './auth.handler';
import { productsHandlers } from './products';

const handlers = [...authHandlers, ...productsHandlers];

export default handlers;
