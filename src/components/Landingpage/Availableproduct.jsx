import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { fetchAvailableProducts } from '../../redux/actions/product.action';
import Button from '../Button/Button';
import LoadingSpinner from '../LoadingSpinner';
import { addItemToCart } from '../../redux/actions/cart.action';

const Homeproduct = () => {
	const [availableProducts, setAvailableProducts] = useState([]);
	const { products } = useSelector((state) => state.products || {});
	const { loading } = useSelector((state) => state.products || {});
	const token = Cookies.get('token');

	const [isLoading, setIsLoading] = useState(false);
	const [clickedProductId, setClickedProductId] = useState(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchAvailableProducts());
	}, [dispatch]);

	useEffect(() => {
		if (products) {
			setAvailableProducts(products.items);
		}
	}, [products, products.items]);

	const product = availableProducts ? availableProducts.slice(0, 8) : [];

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

	return (
		<div className="w-full mx-auto px-8 py-4 ">
			<h3 className="w-full font-bold text-3xl">Todays Best Deals for You!</h3>
			<div className="grid grid-cols-2 middle:flex  gap-5 middle:w-full">
				<Button
					label="All"
					className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-4  w-28"
				/>
				<Button
					label="clothes"
					className="flex items-center justify-center p-1 rounded-2xl  bg-brightGray text-black  my-4  w-28"
				/>
				<Button
					label="electronics"
					className="flex items-center justify-center p-1 rounded-2xl  bg-brightGray text-black my-4  w-28"
				/>
				<Button
					label="food"
					className="flex items-center justify-center p-1 rounded-2xl  bg-brightGray text-black my-4  w-28"
				/>

				<Link
					to="/product"
					className="text-yellow font-bold underline flex items-center justify-center"
				>
					See All
				</Link>
			</div>
			<div className="w-full my-5 mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
					{loading ? (
						<div>
							<div className="w-full h-full flex items-center justify-center mx-auto my-4 bg">
								<LoadingSpinner className="w-9 h-9 mr-2 text-gray-200 animate-spin fill-primaryGreen" />
							</div>
						</div>
					) : (
						product?.map((item) => (
							<div key={item.productId} className="card border">
								<div className="bg-gray relative">
									<div className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-white">
										<FiHeart className="text-lightRed" />
									</div>
									<Link to={`/product/${item.productId}`}>
										<img
											className="h-56 w-full object-cover"
											src={item.productImage[0]}
											alt={item.productName}
										/>
									</Link>
								</div>
								<div>
									<h1>{item.productName}</h1>
									<p className="font-bold">Price: ${item.productPrice}</p>
									<p>{item.productDescription.slice(0, 50)}...</p>
									<div className="flex gap-1">
										<AiFillStar className="text-[#225F33]" />
										<AiFillStar className="text-[#225F33]" />
										<AiFillStar className="text-[#225F33]" />
										<AiFillStar className="text-[#225F33]" />
										<AiFillStar className="text-[#000000]" />
									</div>
									<button
										type="submit"
										className="flex items-center justify-center p-1 rounded-2xl bg-gray text-black font-bold my-2 w-28"
										onClick={(event) => handleClick(event, item.productId)}
									>
										{isLoading && clickedProductId === item.productId ? (
											<LoadingSpinner className="w-6 h-6 mr-2 text-green" />
										) : (
											'Add to Cart'
										)}
									</button>
								</div>
							</div>
						))
					)}
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Homeproduct;
