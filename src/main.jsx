/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.css';
import store from './redux/store';
import { ContextProvider } from './contexts/ContextProvider';
import 'react-toastify/dist/ReactToastify.css';

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
