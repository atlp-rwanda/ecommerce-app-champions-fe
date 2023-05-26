import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import LoadingSpinner from '../LoadingSpinner';
import { handleToken } from '../../redux/actions/token.action';
import { addItemToCart } from '../../redux/actions/cart.action';
import {
	addItemToWishList,
	getAllWishlist,
} from '../../redux/actions/wishList.action';

const ProductCard = ({ product, className, btnclassName }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [clickedProductId, setClickedProductId] = useState(null);
	const [showHeart, setShowHeart] = useState(false);
	const { token } = useSelector((state) => state.token);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);
	const handleClick = async (event, productId) => {
		event.preventDefault();
		setIsLoading(true);
		setClickedProductId(productId);
		if (!token) {
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		}
		dispatch(addItemToCart(productId, token));
	};
	useEffect(() => {
		if (token) {
			setShowHeart(true);
		} else {
			setShowHeart(false);
		}
	}, [token]);
	const handleWish = (id) => {
		dispatch(addItemToWishList(id, token)).then(() => {
			dispatch(getAllWishlist(token));
		});
	};
	return (
		<div className="card bg-[#EEF0F2] border-2 border-lightYellow rounded-md relative hover:scale-105  duration-200 ease-in-out  p-1 ">
			<div className="absolute top-1 right-1 flex items-center justify-center w-8 h-8 rounded-full ">
				{showHeart && (
					<FiHeart
						className="text-lightRed cursor-pointer"
						onClick={() => handleWish(product.productId)}
						style={{
							transition: 'background-color 0.3s ease, transform 0.3s ease',
						}}
					/>
				)}
			</div>
			<Link to={`/product/${product.productId}`}>
				<img
					className="h-60 w-full object-cover rounded-t-md-md"
					src={product.productImage[0]}
					alt={product.productName}
				/>
			</Link>
			<div className="px-2 flex flex-col space-y-1 mb-1">
				<div className="flex justify-between items-center">
					<h1 className="font-bold text-[20px] text-[#0D2149]">
						{product.productName}
					</h1>
					<p className="font-bold text-[20px] text-[#358600]">
						{product.productPrice} RWF
					</p>
				</div>
				<p>{product.productDescription.slice(0, 50)}...</p>
				<div className="flex gap-1 stars">
					<AiFillStar className="text-[#225F33]" />
					<AiFillStar className="text-[#225F33]" />
					<AiFillStar className="text-[#225F33]" />
					<AiFillStar className="text-[#225F33]" />
					<AiFillStar className="text-[#000000]" />
				</div>
				<button
					type="submit"
					className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-[#92E3A9] hover:bg-emerald-500 font-bold  w-28"
					onClick={(event) => handleClick(event, product.productId)}
				>
					{isLoading && clickedProductId === product.productId ? (
						<LoadingSpinner className="w-6 h-6 mr-2" />
					) : (
						'Add to Cart'
					)}
				</button>
			</div>
			<ToastContainer />
		</div>
	);
};
export default ProductCard;
