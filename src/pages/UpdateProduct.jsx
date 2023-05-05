/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';
import ProductInput from '../components/product/ProductInput';
import Button from '../components/Button/Button';
import { updateProductField } from '../constants/formFields';
import { fetchProducts } from '../redux/reducers/product/productSlice';
import { updateProduct } from '../redux/reducers/product/updateProductSlice';

const fieldState = {};
updateProductField.forEach((field) => (fieldState[field.id] = ''));

const initialState = {
	productOwner: '',
	productName: '',
	productPrice: '',
	quantity: '',
	expiredDate: '',
	// productImage: '',
	productDescription: '',
	// Category: '',
	bonus: '',
};

export const UpdateProduct = () => {
	const productId = useParams();
	const { loading, error, items } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const [formData, setFormData] = useState(initialState);
	const [imageFiles, setImageFiles] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);
	// const [updatedData, setUpdatedData] = useState({});
	// const { osLoading } = useSelector(
	// 	(state) => state.updateProduct
	// );
	const singleProduct = items
		? items.find((product) => product.productId == productId.id)
		: null;
	// console.log('bonussss', singleProduct.Category.name);
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	useEffect(() => {
		if (singleProduct) {
			// eslint-disable-next-line no-shadow
			// const { productId, ...others } = singleProduct;
			const updatedData = {
				productName: singleProduct.productName,
				productOwner: singleProduct.productOwner,
				// Category: singleProduct.Category,
				productPrice: singleProduct.productPrice,
				quantity: singleProduct.quantity,
				expiredDate: singleProduct.expiredDate,
				productDescription: singleProduct.productDescription,
				bonus: singleProduct.bonus,
				// productImage: singleProduct.productImage,
			};
			setFormData(updatedData);
			// console.log('product nameeeeeee', formData);
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
	const updateProductId = productId.id;

	const handleUpdateProduct = (event) => {
		event.preventDefault();
		const formDat = new FormData();
		Object.keys(formData).forEach((key) => formDat.append(key, formData[key]));
		imageFiles.forEach((file) => formDat.append('productImage', file));
		// console.log( "form dataaaaaaaaaaaaa",formDat);
		// console.log('updatedData', updatedData);
		// setUpdatedData(formData);
		// console.log("dataaaaaaaaa", formData.productCategory);
		dispatch(updateProduct({ id: updateProductId, data: formDat }));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (e.target.name === 'productImage') {
			setImageFiles([...imageFiles, ...e.target.files]);
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};
	useEffect(() => {
		const filesArray = Array.from(imageFiles);
		const selectedImageUrls = filesArray.map((file) =>
			URL.createObjectURL(file)
		);
		setSelectedImages(selectedImageUrls);

		return () => {
			// Clean up the object URLs
			selectedImageUrls.forEach((url) => URL.revokeObjectURL(url));
		};
	}, [imageFiles]);

	// console.log(formData);

	return (
		<div className="flex flex-col  bg-lightBlue items-center justify-center h-screen">
			<h3 className="text-center text-4xl font-extrabold font-bold text-yellow mb-8">
				Update Product
			</h3>
			<form onSubmit={handleUpdateProduct}>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:ml-20">
					<ProductInput
						placeholder="Product Owner"
						type="Text"
						id="productOwner"
						name="productOwner"
						isRequired={true}
						labelText="Product Owner"
						labelFor="Product Owner"
						multiple={true}
						autoComplete="true"
						value={formData?.productOwner}
						handleChange={handleChange}
						// value={createState[field.id]}
					/>
					<ProductInput
						placeholder="Product Name"
						type="Text"
						id="productName"
						name="productName"
						isRequired={true}
						labelText="Product Name"
						labelFor="Product Name"
						multiple={true}
						autoComplete="true"
						value={formData?.productName}
						handleChange={handleChange}
						// value={createState[field.id]}
					/>
					<ProductInput
						placeholder="Product Price"
						type="number"
						id="productPrice"
						name="productPrice"
						isRequired={true}
						labelText="Product price"
						labelFor="Product price"
						multiple={true}
						autoComplete="true"
						value={formData?.productPrice}
						handleChange={handleChange}
						// value={createState[field.id]}
					/>
					<ProductInput
						placeholder="quantity"
						type="number"
						id="quantity"
						name="quantity"
						isRequired={true}
						labelText="number of items"
						labelFor="number of items"
						multiple={true}
						autoComplete="true"
						value={formData?.quantity}
						handleChange={handleChange}
						// value={createState[field.id]}
					/>

					<ProductInput
						placeholder="Expiry date"
						type="date"
						id="expiryDate"
						name="expiredDate"
						isRequired={true}
						labelText="Expiry Date"
						labelFor="Expiry Date"
						multiple={true}
						autoComplete="true"
						value={formatDate(formData?.expiredDate)}
						handleChange={handleChange}
						// value={createState[field.id]}
					/>

					<div>
						{/* <span className="text-black">
							<img src={formData?.productImage[0]} alt="productImage" />
						</span> */}
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
								// eslint-disable-next-line react/no-array-index-key
								key={imageindex}
								src={imageUrl || formData?.productImage[0]}
								alt=""
								className="h-16 w-16 object-cover rounded"
							/>
						))}
					</div>
					<ProductInput
						placeholder="Product Decription"
						type="text"
						id="productDescription"
						name="productDescription"
						isRequired={true}
						labelText="Product Description"
						labelFor="Product Description"
						multiple={true}
						autoComplete="true"
						value={formData?.productDescription}
						handleChange={handleChange}
						// value={createState[field.id]}
					/>
					{/* <ProductInput
						placeholder="Product Category"
						type="text"
						id="productCategory"
						name="productCategory"
						isRequired={true}
						labelText="Product Category"
						labelFor="Product Category"
						multiple={true}
						autoComplete="true"
						value={formData?.productCategory ?? formData?.Category?.name}
						handleChange={handleChange}
					/> */}

					<ProductInput
						placeholder="Bonus"
						type="number"
						id="bonus"
						name="bonus"
						isRequired={true}
						labelText="Bonus"
						labelFor="Bonus"
						multiple={true}
						autoComplete="true"
						value={formData?.bonus}
						handleChange={handleChange}
						// value={createState[field.id]}
					/>

					<ToastContainer />
				</div>
				<div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 my-5">
					<Button
						label="Cancel"
						className="flex items-center justify-center p-2 rounded-2xl bg-red text-white font-bold w-full md:w-28"
					/>
					<Button
						label="Update"
						onClick={handleUpdateProduct}
						className="flex items-center justify-center p-2 rounded-2xl bg-primaryGreen text-white font-bold w-full md:w-28"
					/>
				</div>
			</form>
		</div>
	);
};
