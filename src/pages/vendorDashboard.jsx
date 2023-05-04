import React from 'react';

import Products from '../components/dashboard/products';

function VendorDashboard() {
	return (
		<div className="h-screen pt-5 bg-brightGray">
			<h1>Vendor dashboard</h1>
			<Products />
		</div>
	);
}

export default VendorDashboard;
