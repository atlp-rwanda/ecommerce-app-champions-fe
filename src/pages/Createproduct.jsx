import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProductField } from '../constants/formFields';
import InputProduct from '../components/Auth/InputProduct';
import Button from '../components/Button/Button';

import { createnewProduct } from '../redux/actions/createproduct.actions';

const fieldState = {};
createProductField.forEach((field) => (fieldState[field.id] = ''));

const CreateProduct = () => {
	const dispatch = useDispatch();
	const { product, loading } = useSelector((state) => state.createproduct);
	const [createState, setCreateState] = useState(fieldState);

	const handleChange = (e) =>
		setCreateState({ ...createState, [e.target.id]: e.target.value });

	const handlecreate = (e) => {
		e.preventDefault();
		dispatch(createnewProduct(createState));
	};

	if (product) {
		console.log(product);
	}
	return (
		<div className=" bg-brightGray flex flex-col justify-center items-center pl-20 pr-20 ">
			<h3 className="text-left font-extrabold text-2xl font-bold text-yellow my-2">
				Create a new product
			</h3>
			<form className="w-80% bg-E5EAF9 my-5" onSubmit={handlecreate}>
				<div className="grid grid-cols-3  gap-4 content-center ">
					{createProductField.map((field) => (
						<InputProduct
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
							handleChange={handleChange}
							value={createState[field.id]}
							className="appearance-none py-2 px-2 my-2 rounded-md w-12/12"
						/>
					))}
				</div>
				<div className="flex  space-x-4 my-5  justify-center items-center">
					<Button
						label="Cancel"
						className="flex items-center justify-center p-1 rounded-2xl bg-lightRed text-white font-bold my-2 w-28"
					/>
					<Button
						label="Add product"
						className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
					/>
				</div>
			</form>
		</div>
	);
};
export default CreateProduct;
