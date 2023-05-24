/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { getSingleProduct } from '../redux/actions/product.action';
import { addItemToCart } from '../redux/actions/cart.action';
import Button from '../components/Button/Button';
import Truck from '../assets/truck.svg';
import Return from '../assets/return.svg';
import RecommendedProducts from '../components/product/RecommendedProducts';
import Topnav from '../components/Landingpage/topnav';
import { getProductReview } from '../redux/actions/review.action';
import { getProductRate } from '../redux/actions/ratings.action';
import ProductReview from '../components/product/ProductReview';
import AddReviewForm from '../components/product/AddReview';
// import Footer from '../components/Landingpage/Footer';

const SingleProductPage = () => {
	const [showAddReviewForm, setShowAddReviewForm] = useState(false);
	const { success, error } = useSelector((state) => state.review);
	const { rating } = useSelector((state) => state.rating);

	const { productId } = useParams();
	const { product } = useSelector((state) => state.products);
	const { token } = useSelector((state) => state.token);
	const [image, setImage] = useState(product?.item?.productImage[0]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getSingleProduct(productId));
	}, [dispatch, productId]);

	useEffect(() => {
		dispatch(getProductReview(productId));
	}, [dispatch, productId]);

	useEffect(() => {
		dispatch(getProductRate(productId));
	}, [dispatch, productId]);

	const handleToggleAddReviewForm = () => {
		setShowAddReviewForm(!showAddReviewForm);
	};
	if (error) {
		dispatch(getProductReview(productId));
	}

	const handleReviewAdded = () => {
		setShowAddReviewForm(false);
		if (!token) {
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		}
		dispatch(getProductReview(productId));
		dispatch(getProductRate(productId));
	};
	const handleClick = (prodId) => {
		if (!token) {
			toast.warn('You must login to add items to the cart.', {
				position: toast.POSITION.TOP_RIGHT,
			});
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		}
		dispatch(addItemToCart(prodId, token));
	};
	const handleCehckout = (prodId) => {
		if (!token) {
			toast.warn('You must login to add items to the cart.', {
				position: toast.POSITION.TOP_RIGHT,
			});
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		}
		dispatch(addItemToCart(prodId, token)).then(() => navigate('/cart'));
	};

	return (
		<div className="flex flex-col space-y-5 w-screen h-screen">
			<Topnav />
			<div className="w-screen h-screen mx-auto  flex flex-col space-y-5">
				<div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 w-11/12 mx-auto">
					<div className="w-full md:w-2/5 h-72  md:h-96 flex flex-col space-y-2 md:space-y-3">
						<img
							src={image || product?.item?.productImage[0]}
							alt=""
							className="object-cover h-full w-full rounded-md"
						/>
						<div className="hidden md:flex w-full justify-between items-center">
							{product?.item?.productImage.slice(0, 4).map((img, index) => (
								<img
									src={img}
									alt=""
									key={index}
									className=" h-20 w-24 rounded-sm object-cover "
									onClick={() => setImage(img)}
								/>
							))}
						</div>
					</div>
					<div className="flex flex-col w-full md:w-3/5 space-y-5">
						<h2 className="text-3xl capitalize font-bold">
							{product?.item?.productName}
						</h2>
						<p className="text-md capitalize font-normal">
							{product?.item?.productDescription}
						</p>
						<p className="text-md font-bold flex items-center">
							Price: {product?.item?.productPrice} RWF
							<span className="px-2 font-normal"> each</span>
						</p>
						<h1 className="text-md font-bold flex items-center text-yellow">
							Ratings
						</h1>
						<div className="flex gap-1">
							{[...Array(5)].map((_, index) => (
								<span key={index}>
									{index < rating?.averageRating ? (
										<AiFillStar className="text-[#225F33]" />
									) : (
										<AiOutlineStar className="text-[#000000]" />
									)}
								</span>
							))}
							<span className="text-black font-bold">
								({rating?.reviews.length})
							</span>
						</div>

						<div className="border border-gray w-full opacity-60" />
						<div className="flex items-center justify-between w-full space-x-6">
							<div className="text-black font-normal">
								<p>
									Only
									<span className="text-yellow font-body px-1">
										{product?.item?.quantity} Items
									</span>
									left! Don’t miss it
								</p>
							</div>
						</div>
						<div className="flex space-x-5 items-center">
							<Button
								handleClick={() => handleCehckout(product?.item?.productId)}
								label="Buy Now"
								className="bg-primaryGreen text-center text-white px-2 py-1 rounded-full w-36"
							/>
							{/* <Link
								to="/checkout"
								className="bg-primaryGreen text-center text-white px-2 py-1 rounded-full w-36"
							>
								Buy Now
							</Link> */}
							<Button
								handleClick={() => handleClick(product?.item?.productId)}
								label="Add to cart"
								className="border border-primaryGreen text-center rounded-full hover:bg-primaryGreen hover:text-white w-36 px-2 py-1"
							/>
						</div>
						<div className="bg-gray flex flex-col opacity-70 rounded-md w-full md:w-11/12 p-2 space-y-3">
							<div className="flex space-x-5">
								<img src={Truck} alt="" />
								<div className="flex flex-col">
									<h2 className="font-bold text-lg">Delivery</h2>
									<p>Delivery within less than one day</p>
								</div>
							</div>
							<div className="border border-black opacity-5" />
							<div className="flex space-x-5">
								<img src={Return} alt="" />
								<div className="flex flex-col">
									<h2 className="font-bold text-lg">Return delivery</h2>
									<p>Free 30 days delivery return</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-11/12 mx-auto my-4">
					<h2 className="font-bold text-2xl text-yellow ">Reviews</h2>
					<ProductReview product={product?.item?.productId} />
				</div>
				{!showAddReviewForm && (
					<Button
						label="Add Review"
						onClick={handleToggleAddReviewForm}
						className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 mx-10 w-28"
					/>
				)}
				{showAddReviewForm && !success && (
					<AddReviewForm
						productId={productId}
						onReviewAdded={handleReviewAdded}
					/>
				)}
				<div className="w-11/12 mx-auto">
					<h2 className="font-bold text-2xl">Similar Products</h2>
					<RecommendedProducts product={product?.item?.productName} />
				</div>
			</div>
			{/* <Footer /> */}
			<ToastContainer />
		</div>
	);
};

export default SingleProductPage;
