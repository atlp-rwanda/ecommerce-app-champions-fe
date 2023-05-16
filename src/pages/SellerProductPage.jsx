import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import Logo from '../assets/Logo.svg';
import { getProductById } from '../redux/actions/singleProduct.action';
import { handleToken } from '../redux/actions/token.action';
import ProductImages from '../components/product/productImages';
import ProductDetails from '../components/product/productDetails';
import LoadingSpinner from '../components/LoadingSpinner';

const SellerProductPage = () => {
	const { productId } = useParams();
	const dispatch = useDispatch();
	const { products, loading } = useSelector((state) => state.singleProduct);
	const { token } = useSelector((state) => state.token);

	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);

	useEffect(() => {
		if (token) {
			dispatch(getProductById(productId, token));
		}
	}, [dispatch, productId, token]);

	return (
		<div>
			<div className="w-screen md:w-full bg-lightYellow px-7 py-4 flex justify-between items-center">
				<img src={Logo} className="w-32 md:w-40 cursor-pointer" alt="Logo" />
				<AiOutlineLogout
					size={25}
					className="text-primaryGreen cursor-pointer"
				/>
			</div>
			<div className="flex container w-4/5 mx-auto  flex-col justify-center lg:flex-row">
				{loading ? (
					<div className="w-full h-full flex items-center justify-center mx-auto my-4">
						<LoadingSpinner className="w-9 h-9 mr-2 text-gray-200 animate-spin fill-primaryGreen" />
					</div>
				) : (
					products && (
						<div className="flex justify-center mx-auto mt-9 flex-col md:flex-row md:justify-center  w-full ">
							<div className=" justify-start md:w-1/2 top-0 border-0  rounded-xl  ">
								<ProductImages images={products.item.productImage} />
							</div>
							<div className="w-full md:w-1/2 px-5 border-0 rounded-xl">
								<ProductDetails product={products.item} />
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default SellerProductPage;
