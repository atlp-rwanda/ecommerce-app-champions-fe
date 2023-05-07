/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { registerLicense } from '@syncfusion/ej2-base';
import App from './App';
import './index.css';
import store from './redux/store';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense(
	'Mgo+DSMBaFt+QHJqVk1mQ1JbdF9AXnNNdFB3T2Zebz4Nf1dGYl9RQXZbQ1tgSHtUf0xnWQ==;Mgo+DSMBPh8sVXJ1S0R+X1pCaVxdX2NLfUNyT2BYdVt3ZDU7a15RRnVfR11nSHhQd0BrWX5ecA==;ORg4AjUWIQA/Gnt2VFhiQlJPcEBBQmFJfFBmQWlaflR1c0UmHVdTRHRcQlhjTX9VdURmUX9ceHQ=;MTkyNjU1NkAzMjMxMmUzMjJlMzNPYy9kbVlub2xtaHZPeTcrQTQydCtoN29wRWNWd3I4ejNFanIwWmJNMklvPQ==;MTkyNjU1N0AzMjMxMmUzMjJlMzNlS290R2VBK0lsTmt5amdldjhUcXB0TTFjbXRTOUgrTVZhUis1c3JqWFRvPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldXnxLflF1VWdTfF96cVJWACFaRnZdQV1mSXpScEZiXHdeeX1V;MTkyNjU1OUAzMjMxMmUzMjJlMzNVNzViT2lxRGxEa1dZeFM5N2VZUHVlMmZCZkhEcGM1MFd4eDEzM0thUVJjPQ==;MTkyNjU2MEAzMjMxMmUzMjJlMzNZWXRSR3dKQmgzaVQ5OC9RWDc4VXp0bmdFbE8xNVY5cGRYZi81RjhzSTdFPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcEBBQmFJfFBmQWlaflR1c0UmHVdTRHRcQlhjTX9VdURmUX5YdnQ=;MTkyNjU2MkAzMjMxMmUzMjJlMzNoL0NHTnlFZVBxT1NRNytPZDNuSlBFSkMwaWJQVENZbWlESmQ3c016MVJzPQ==;MTkyNjU2M0AzMjMxMmUzMjJlMzNjdFhKQ3BSa09lUVFBQWNTZjZXME14YzZDMUg1STN4dy9SY2hpY3Fla0lFPQ==;MTkyNjU2NEAzMjMxMmUzMjJlMzNVNzViT2lxRGxEa1dZeFM5N2VZUHVlMmZCZkhEcGM1MFd4eDEzM0thUVJjPQ=='
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<ContextProvider>
				<App />
			</ContextProvider>
		</Provider>
	</React.StrictMode>
);
