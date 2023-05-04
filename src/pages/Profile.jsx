import React from 'react';
import BuyerProfile from '../components/setting/buyerProfile';
import VendorProfile from '../components/setting/vendorProfile';

function Profile() {
	const isVendor = false;
	const isBuyer = true;

	return (
		<div className="w-full min-h-screen">
			{isVendor ? <VendorProfile /> : isBuyer && <BuyerProfile />}
		</div>
	);
}

export default Profile;
