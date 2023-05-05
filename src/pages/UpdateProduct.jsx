/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductInput from '../components/product/ProductInput';
import Button from '../components/Button/Button';
import { updateProductField } from '../constants/formFields';

const fieldState = {};
updateProductField.forEach((field) => (fieldState[field.id] = ''));

export const UpdateProduct = () => {
	const dispatch = useDispatch();
	const { loading, error, success } = useSelector(
		(state) => state.updateProduct
	);

	return (
		<div className="flex flex-col  bg-lightBlue items-center justify-center h-screen">
			<h3 className="text-center text-4xl font-extrabold font-bold text-yellow mb-8">
				Update Product
			</h3>
			<form onSubmit="">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:ml-20">
					{updateProductField.map((field) => (
						<ProductInput
							key={field.id}
							placeholder={field.placeholder}
							type={field.type}
							id={field.id}
							name={field.name}
							isRequired={field.isRequired}
							labelText={field.labelText}
							labelFor={field.labelFor}
							multiple={field.multiple}
							autoComplete={field.autoComplete}
							// handleChange={handleChange}
							// value={createState[field.id]}
							value={field.value}
							className="appearance-none py-2 px-2 my-6 rounded-md w-full md:w-8/12"
						/>
					))}
				</div>
				<div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 my-5">
					<Button
						label="Cancel"
						className="flex items-center justify-center p-2 rounded-2xl bg-red text-white font-bold w-full md:w-28"
					/>
					<Button
						label="Update"
						className="flex items-center justify-center p-2 rounded-2xl bg-primaryGreen text-white font-bold w-full md:w-28"
					/>
				</div>
			</form>
		</div>
	);
};
