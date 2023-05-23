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
const ProductCard = ({ product }) => {
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
			toast.warn('you must login to add item to cart.', {
				position: toast.POSITION.TOP_RIGHT,
			});
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		}
		dispatch(addItemToCart(productId, token));
	};
	useEffect(() => {
		if (token) {
			setShowHeart(true);
		}
	}, [token]);
	const handleWish = (id) => {
		dispatch(addItemToWishList(id, token)).then(() => {
			dispatch(getAllWishlist(token));
		});
	};
	return (
		<div className="card border-2 border-lightYellow rounded-md relative">
			<div className="absolute top-1 right-1 flex items-center justify-center w-8 h-8 rounded-full bg-white">
				{showHeart && (
					<FiHeart
						className="text-lightRed cursor-pointer"
						onClick={() => handleWish(product.productId)}
					/>
				)}
			</div>
			<Link to={`/product/${product.productId}`}>
				<img
					className="h-48 w-full object-cover rounded-t-md-md"
					src={product.productImage[0]}
					alt={product.productName}
				/>
			</Link>
			<div className="px-2 flex flex-col space-y-1 mb-1">
				<div className="flex justify-between items-center">
					<h1 className="font-bold">{product.productName}</h1>
					<p className="font-bold">{product.productPrice} RWF</p>
				</div>
				<p>{product.productDescription.slice(0, 50)}...</p>
				<div className="flex gap-1">
					<AiFillStar className="text-[#225F33]" />
					<AiFillStar className="text-[#225F33]" />
					<AiFillStar className="text-[#225F33]" />
					<AiFillStar className="text-[#225F33]" />
					<AiFillStar className="text-[#000000]" />
				</div>
				<button
					type="submit"
					className="flex items-center justify-center p-1 rounded-2xl bg-gray text-black font-bold  w-28"
					onClick={(event) => handleClick(event, product.productId)}
				>
					{isLoading && clickedProductId === product.productId ? (
						<LoadingSpinner className="w-6 h-6 mr-2 text-green" />
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
