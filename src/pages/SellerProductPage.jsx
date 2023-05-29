/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { getProductById } from '../redux/actions/singleProduct.action';
import { handleToken } from '../redux/actions/token.action';
import Button from '../components/Button/Button';
import NotButton from '../components/vendorDashboard/notButton';
import Loader from '../components/vendorDashboard/Loader';
import { enableProducts } from '../redux/actions/enableProduct.action';
import { disableProducts } from '../redux/actions/disableProduct.action';

const SellerProductPage = ({ setShowSingleProduct }) => {
	const id = useSelector((state) => state.singleProduct.setProductId);
	const dispatch = useDispatch();
	const { products, loading } = useSelector((state) => state.singleProduct);
	const { isLoading } = useSelector((state) => state.enableProduct);
	const { Loading } = useSelector((state) => state.disableProduct);
	const { token } = useSelector((state) => state.token);
	const navigate = useNavigate();

	const formattedDate = new Date(
		products?.item?.expiredDate
	).toLocaleDateString();
	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);

	useEffect(() => {
		if (token) {
			dispatch(getProductById(id, token));
		}
	}, [dispatch, id, token]);

	const handleSingleProductClose = () => {
		setShowSingleProduct(false);
	};
	const handleEnable = useCallback(() => {
		if (token) {
			dispatch(enableProducts(id, token))
				.then(() => dispatch(getProductById(id, token)))
				.catch((error) => {});
		}
	}, [dispatch, id, token]);
	const handleDisable = useCallback(() => {
		dispatch(disableProducts(id, token))
			.then(() => {
				dispatch(getProductById(id, token));
			})
			.catch((error) => {});
	}, [dispatch, id, token]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="w-screen  relative bg-[#EEF0F2]   my-5 md:m-20  p-10 flex flex-col space-y-5 ">
					<div className="absolute right-[80px] top-[10px] ">
						<NotButton
							icon={<MdOutlineCancel />}
							color="green"
							bgHoverColor="green"
							size="2xl"
							borderRadius="50%"
							className="cancel"
							onClick={handleSingleProductClose}
						/>
					</div>
					<div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-6 w-11/12 mx-auto justify-center items-center ">
						<div className="w-full  md:w-2/5 h-72  md:h-96 flex flex-col space-y-2 md:space-y-3">
							<img
								src={products?.item?.productImage[0]}
								alt=""
								className="object-cover w-full h-[320px] rounded-md"
							/>
							<div className="hidden md:flex w-full justify-between items-center">
								{products?.item?.productImage.map((img, index) => (
									<img
										src={img}
										alt=""
										key={index}
										className=" h-20 w-24 rounded-sm object-cover "
									/>
								))}
							</div>
						</div>
						<div className="flex flex-col w-full md:w-3/5 space-y-5 ">
							<h2 className="text-3xl capitalize font-bold">
								{products?.item?.productName}
							</h2>
							<p className="text-md capitalize font-normal justify-self-auto">
								{products?.item?.productDescription}
							</p>
							<p className="text-md font-bold flex items-center">
								Price: {products?.item?.productPrice} RWF
							</p>
							<p className="text-md font-bold flex items-center">
								Quantity:{products?.item?.quantity}
							</p>
							<p className="text-md font-bold flex items-center">
								Expiry date: {formattedDate}
							</p>
							{products?.item?.available ? (
								<>
									<p className="text-2xl text-green-500 border-b border-lightRed">
										Available
									</p>

									<Button
										label="Disable"
										loading={Loading}
										className=" bg-rosy_brown text-center text-white px-2 py-1  rounded-full w-28"
										handleClick={() => handleDisable(products?.item?.productId)}
									/>
								</>
							) : (
								<>
									<p className="text-lg text-red-500">Out of stock</p>
									<Button
										label="Enable"
										loading={isLoading}
										className="bg-primaryGreen text-center text-white px-2 py-1 rounded-full w-28"
										handleClick={() => handleEnable(products?.item?.productId)}
									/>
								</>
							)}

							<p className="text-lg">{products?.item?.bonus}</p>

							<div className="border border-gray w-full opacity-60 mt-8" />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SellerProductPage;
