/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
import { useState } from 'react';

import Button from '../components/Button/Button';

import CreateProduct from './Createproduct';

const vendorDashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className=" h-screen flex justify-end pr-4">
			{isOpen ? (
				<CreateProduct setIsOpen={setIsOpen} />
			) : (
				<div className="mt-40">
					<Button
						label="create new product"
						className=" flex items-center justify-center px-10 py-2 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-50"
						onClick={() => setIsOpen(true)}
					/>
				</div>
			)}
		</div>
	);
};

export default vendorDashboard;
