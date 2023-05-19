import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AiFillStar } from 'react-icons/ai';
import { getRecommendedProducts } from '../../redux/actions/product.action';
import LoadingSpinner from '../LoadingSpinner';
import { addItemToCart } from '../../redux/actions/cart.action';
import Button from '../Button/Button';

const RecommendedProducts = ({ product }) => {
	const { loadRecommended, products } = useSelector((state) => state.products);
	const { token } = useSelector((state) => state.token);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleClick = async (prodId) => {
		if (!token) {
			toast.warn('you must login to add item to cart.', {
				position: toast.POSITION.TOP_RIGHT,
			});
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		}
		dispatch(addItemToCart(prodId, token));
	};
	useEffect(() => {
		dispatch(getRecommendedProducts(product));
	}, [dispatch, product]);
	if (loadRecommended === true) {
		return (
			<LoadingSpinner className="w-8 h-8 my-5 text-gray-200 animate-spin fill-primaryGreen" />
		);
	}
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 md:gap-3 my-4">
			{products?.recommendedProducts?.map((prod) => (
				<div
					className="flex flex-col space-y-1 md:space-y-2 h-72"
					key={prod.productId}
				>
					<Link to={`/product/${prod.productId}`} className="w-full h-2/3">
						<img
							src={prod.productImage[0]}
							alt=""
							className="w-full h-full object-cover rounded-t-md"
						/>
					</Link>
					<div className="flex text-xl font-bold justify-between items-center">
						<h2>{prod.productName}</h2>
						<h2 className="text-lg font-medium">{prod.productPrice} RWF</h2>
					</div>
					<p>{prod.productDescription.slice(0, 50)}...</p>
					<div className="flex gap-1">
						<AiFillStar className="text-[#225F33]" />
						<AiFillStar className="text-[#225F33]" />
						<AiFillStar className="text-[#225F33]" />
						<AiFillStar className="text-[#225F33]" />
						<AiFillStar className="text-[#000000]" />
					</div>
					<Button
						handleClick={() => handleClick(prod.productId)}
						label="Add to cart"
						className="border border-black rounded-full w-32 text-center"
					/>
				</div>
			))}
		</div>
	);
};

export default RecommendedProducts;
