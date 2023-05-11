/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
import { useState } from 'react';

import Products from '../components/dashboard/products';
import CreateProduct from './Createproduct';

const VendorDashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex justify-center  h-screen pr-4 ">
			{isOpen ? (
				<CreateProduct setIsOpen={setIsOpen} />
			) : (
				<Products setIsOpen={setIsOpen} />
			)}
		</div>
	);
};
export default VendorDashboard;
