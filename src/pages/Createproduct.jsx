/* eslint-disable no-return-assign */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { createProductField } from '../constants/formFields';
import InputProduct from '../components/Auth/InputProduct';
import Button, { DangerButton } from '../components/Button/Button';

import { createnewProduct } from '../redux/actions/createproduct.actions';

const fieldState = {};
createProductField.forEach((field) => (fieldState[field.id] = ''));

const CreateProduct = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.createproduct);
	const [createState, setCreateState] = useState(fieldState);
	const [imageFiles, setImageFiles] = useState([]);

	const handleChange = (e) => {
		if (e.target.type === 'file') {
			setImageFiles([...imageFiles, ...e.target.files]);
		} else {
			setCreateState({ ...createState, [e.target.id]: e.target.value });
		}
	};

	const handleCreate = (e) => {
		e.preventDefault();

		const formData = new FormData();
		Object.keys(createState).forEach((key) =>
			formData.append(key, createState[key])
		);
		imageFiles.forEach((file) => formData.append('productImage', file));

		dispatch(createnewProduct(formData));
	};

	const handleCancel = () => {
		setCreateState(fieldState);
		setImageFiles([]);
	};
	return (
		<div className=" bg-brightGray flex flex-col justify-center items-center pl-20 pr-20 ">
			<h3 className="text-left font-extrabold text-2xl font-bold text-yellow my-2">
				Create a new product
			</h3>
			<form className="w-80% bg-E5EAF9 my-5" onSubmit={handleCreate}>
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
					<div className="flex flex-col">
						<label
							htmlFor="productImage"
							className="px-1 text-grayish_blue text-sm"
						>
							Product Image
						</label>
						<input
							type="file"
							id="productImage"
							name="productImage"
							onChange={handleChange}
							className="appearance-none py-2 px-2 my-2 rounded-md w-12/12"
						/>
					</div>
				</div>
				<div className="flex  space-x-4 my-5  justify-center items-center">
					<Button
						loading={loading}
						label="Add product"
						className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
					/>
					<DangerButton
						label="Cancel"
						className="flex items-center justify-center p-1 rounded-2xl bg-lightRed text-white font-bold my-2 w-28"
						onClick={handleCancel}
					/>
				</div>
				<ToastContainer />
			</form>
		</div>
	);
};
export default CreateProduct;
