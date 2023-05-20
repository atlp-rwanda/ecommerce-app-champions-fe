/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { registerLicense } from '@syncfusion/ej2-base';
import App from './App';
import './index.css';
import store from './redux/store';
import { ContextProvider } from './contexts/ContextProvider';
import varKeys from './constants/keys';

import 'react-toastify/dist/ReactToastify.css';

const token = varKeys.VITE_LICENSE_STRING;

registerLicense(token);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<ContextProvider>
				<ToastContainer />
				<App />
			</ContextProvider>
		</Provider>
	</React.StrictMode>
);
