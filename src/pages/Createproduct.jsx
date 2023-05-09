/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RiCloseLine } from 'react-icons/ri';
import { createProductField } from '../constants/formFields';
import InputProduct from '../components/Auth/InputProduct';
import Button from '../components/Button/Button';

import { createnewProduct } from '../redux/actions/createproduct.actions';

const fieldState = {};
createProductField.forEach((field) => (fieldState[field.id] = ''));

const CreateProduct = ({ setIsOpen }) => {
	const dispatch = useDispatch();
	const { product, loading } = useSelector((state) => state.createproduct);
	const [createState, setCreateState] = useState(fieldState);
	const [imageFiles, setImageFiles] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);

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
		setSelectedImages([]);
		setIsOpen(false);
	};

	useEffect(() => {
		if (product) {
			setTimeout(() => {
				setIsOpen(false);
				window.location.reload();
			}, 7000);
		}

		const filesArray = Array.from(imageFiles);
		const selectedImageUrls = filesArray.map((file) =>
			URL.createObjectURL(file)
		);
		setSelectedImages(selectedImageUrls);

		return () => {
			// Clean up the object URLs
			selectedImageUrls.forEach((url) => URL.revokeObjectURL(url));
		};
	}, [product, imageFiles, setIsOpen]);

	return (
		<div className=" relative w-full sm:w-3/4  bg-brightGray  flex flex-col overflow-auto   items-center p-10 my-20">
			<button
				className="absolute top-0 right-0 p-2  text-red font-bold"
				onClick={() => setIsOpen(false)}
			>
				<RiCloseLine />
			</button>

			<h3 className="text-left font-extrabold text-2xl font-bold text-yellow my-2">
				Create a new product
			</h3>
			<form
				className=" w-full sm:w-80%  bg-E5EAF9 my-5"
				onSubmit={handleCreate}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 content-center ">
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
				<div className="flex flex-wrap gap-4">
					{selectedImages.map((imageUrl, imageindex) => (
						<img
							key={imageindex}
							src={imageUrl}
							alt=""
							className="h-16 w-16 object-cover rounded"
						/>
					))}
				</div>
				<div className="flex  space-x-4 my-5  justify-center items-center">
					<Button
						type="submit"
						loading={loading}
						label="Add product"
						className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
					/>
					<Button
						type="button"
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
