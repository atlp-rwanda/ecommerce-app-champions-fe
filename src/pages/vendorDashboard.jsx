/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
import { useState } from 'react';

import Button from '../components/Button/Button';
import Products from '../components/dashboard/products';

import CreateProduct from './Createproduct';

const VendorDashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex justify-end h-screen pr-4 ">
			<Products />
			{isOpen ? (
				<CreateProduct setIsOpen={setIsOpen} />
			) : (
				<div className="mt-40">
					<Button
						label="create new product"
						className="flex items-center justify-center px-10 py-2 my-2 font-bold text-white rounded-2xl bg-primaryGreen w-50"
						onClick={() => setIsOpen(true)}
					/>
				</div>
			)}
		</div>
	);
};
export default VendorDashboard;
