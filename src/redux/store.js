import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import varKeys from '../constants/keys';

import rootReducer from './reducers/rootreducer';

const { NODE_ENV } = varKeys;

const logger = createLogger({});

const store = configureStore({
	reducer: rootReducer,
	devTools: NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

// store.subscribe(() => {
// 	console.log('state updated \n', store.getState());
// });

export default store;
