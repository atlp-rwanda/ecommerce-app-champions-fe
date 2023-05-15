/* eslint-disable eqeqeq */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */

import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { RiCloseLine } from 'react-icons/ri';
import ProductInput from '../components/product/ProductInput';
import Button from '../components/Button/Button';
import { fetchProducts } from '../redux/actions/product.action';
import { updateExistingProduct } from '../redux/actions/updateProduct.action';

const initialState = {
	productOwner: '',
	productName: '',
	productPrice: '',
	quantity: '',
	expiredDate: '',
	productImage: '',
	productDescription: '',
	bonus: '',
};

export const UpdateProduct = ({ setShowUpdateProduct }) => {
	const navigate = useNavigate();

	const { id } = useParams();
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.products.products);
	const [formData, setFormData] = useState(initialState);
	const [imageFiles, setImageFiles] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);
	const { isLoading, success } = useSelector((state) => state.updateProduct);
	const token = Cookies.get('token');

	const handleUpdateProductClose = () => {
		setShowUpdateProduct(false);
	};
	useEffect(() => {
		dispatch(fetchProducts(token));
	}, [dispatch, token]);
	const singleProduct = items
		? items.find((product) => product.productId == id)
		: null;
	useEffect(() => {
		if (singleProduct) {
			const updatedData = {
				productName: singleProduct.productName,
				productOwner: singleProduct.productOwner,
				productPrice: singleProduct.productPrice,
				quantity: singleProduct.quantity,
				expiredDate: singleProduct.expiredDate,
				productDescription: singleProduct.productDescription,
				bonus: singleProduct.bonus,
			};
			setFormData(updatedData);
		}
	}, [singleProduct]);
	function formatDate(dateString) {
		if (!dateString) {
			return '';
		}
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = `${date.getMonth() + 1}`.padStart(2, '0');
		const day = `${date.getDate()}`.padStart(2, '0');
		return `${year}-${month}-${day}`;
	}
	const updateProductId = id;

	const handleUpdateProduct = (event) => {
		event.preventDefault();
		const formDat = new FormData();
		Object.keys(formData).forEach((key) => formDat.append(key, formData[key]));
		imageFiles.forEach((file) => formDat.append('productImage', file));
		dispatch(updateExistingProduct(updateProductId, formDat, token));
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (e.target.name === 'productImage') {
			setImageFiles([...imageFiles, ...e.target.files]);
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};
	const imageInputRef = useRef(null);
	const removeImage = (index) => {
		const updatedImages = [...selectedImages];
		updatedImages.splice(index, 1);
		setSelectedImages(updatedImages);
		const updatedFiles = [...imageFiles];
		updatedFiles.splice(index, 1);
		setImageFiles(updatedFiles);
		// Reset the file input value
		if (imageInputRef.current) {
			imageInputRef.current.value = '';
		}
	};
	useEffect(() => {
		const filesArray = Array.from(imageFiles);
		const selectedImageUrls = filesArray.map((file) =>
			URL.createObjectURL(file)
		);
		setSelectedImages(selectedImageUrls);

		return () => {
			selectedImageUrls.forEach((url) => URL.revokeObjectURL(url));
		};
	}, [imageFiles]);

	useEffect(() => {
		if (success) {
			setTimeout(() => {
				setFormData({});
				navigate('/vendors');
			}, 5000);
		}
	}, [navigate, success]);

	return (
		<div className="dashboard relative flex flex-col m-5 md:m-20  p-10  bg-brightGray items-center justify-center">
			<button
				className="absolute top-0 right-0 p-2 text-red"
				onClick={handleUpdateProductClose}
			>
				<RiCloseLine />
			</button>
			<div className="absolute left-[45px] top-[10px]">
				<h3 className="text-centerm-  text-1xl md:text-4xl font-extrabold font-bold text-yellow mb-8">
					Update Product
				</h3>
			</div>

			<form onSubmit={handleUpdateProduct}>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:ml-20">
					<ProductInput
						placeholder="Product Owner"
						type="Text"
						id="productOwner"
						name="productOwner"
						isRequired
						labelText="Product Owner"
						labelFor="Product Owner"
						multiple
						autoComplete="true"
						value={formData?.productOwner}
						handleChange={handleChange}
					/>
					<ProductInput
						placeholder="Product Name"
						type="Text"
						id="productName"
						name="productName"
						isRequired
						labelText="Product Name"
						labelFor="Product Name"
						multiple
						autoComplete="true"
						value={formData?.productName}
						handleChange={handleChange}
					/>
					<ProductInput
						placeholder="Product Price"
						type="number"
						id="productPrice"
						name="productPrice"
						isRequired
						labelText="Product price"
						labelFor="Product price"
						multiple
						autoComplete="true"
						value={formData?.productPrice}
						handleChange={handleChange}
					/>
					<ProductInput
						placeholder="quantity"
						type="number"
						id="quantity"
						name="quantity"
						isRequired
						labelText="number of items"
						labelFor="number of items"
						multiple
						autoComplete="true"
						value={formData?.quantity}
						handleChange={handleChange}
					/>

					<ProductInput
						placeholder="Expiry date"
						type="date"
						id="expiryDate"
						name="expiredDate"
						isRequired
						labelText="Expiry Date"
						labelFor="Expiry Date"
						multiple
						autoComplete="true"
						value={formatDate(formData?.expiredDate)}
						handleChange={handleChange}
					/>
					<ProductInput
						placeholder="Product Decription"
						type="text"
						id="productDescription"
						name="productDescription"
						isRequired
						labelText="Product Description"
						labelFor="Product Description"
						multiple
						autoComplete="true"
						value={formData?.productDescription}
						handleChange={handleChange}
						// value={createState[field.id]}
					/>
					<ProductInput
						placeholder="Bonus"
						type="number"
						id="bonus"
						name="bonus"
						isRequired
						labelText="Bonus"
						labelFor="Bonus"
						multiple
						autoComplete="true"
						value={formData?.bonus}
						handleChange={handleChange}
						// value={createState[field.id]}
					/>
					<div>
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
							<div key={imageindex} className="relative">
								<img
									key={imageindex}
									src={imageUrl}
									alt=""
									className="h-16 w-16 object-cover rounded"
								/>
								<button
									className="absolute top-0 right-0 p-2 text-red font-bold"
									onClick={() => removeImage(imageindex)}
								>
									<RiCloseLine />
								</button>
							</div>
						))}
					</div>

					<ToastContainer />
				</div>
				<div className="flex space-x-4 my-5  justify-center items-center">
					<Button
						label="Update"
						loading={isLoading}
						onClick={handleUpdateProduct}
						className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
					/>
					<Button
						label="Cancel"
						onClick={handleUpdateProductClose}
						className="flex items-center justify-center p-1 rounded-2xl bg-lightRed text-white font-bold my-2 w-28"
					/>
				</div>
			</form>
		</div>
	);
};
