/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImQuotesLeft, ImPencil, ImCross } from 'react-icons/im';
import Cookies from 'js-cookie';
import {
	deleteProductReview,
	getProductReview,
} from '../../redux/actions/review.action';
import LoadingSpinner from '../LoadingSpinner';

const ProductReview = ({ product }) => {
	const { loading, results } = useSelector((state) => state.review);
	const dispatch = useDispatch();
	// const { token } = useSelector((state) => state.token);
	const token = Cookies.get('token');

	useEffect(() => {
		dispatch(getProductReview(product));
	}, [dispatch, product]);

	if (loading === true) {
		return (
			<LoadingSpinner className="w-8 h-8 my-5 text-gray-200 animate-spin fill-primaryGreen" />
		);
	}

	const handleDeleteReview = (productId) => {
		dispatch(deleteProductReview(productId, token));
		// Implement your delete review logic here
	};

	const handleUpdateReview = (reviewId) => {
		// Implement your update review logic here
	};

	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 md:gap-3 my-4">
			{results?.data?.map((review) => (
				<div
					className="flex flex-col space-y-1 md:space-y-2 h-42 border-1 justify-center items-center"
					key={review.id}
				>
					<div className="flex text-xl font-bold justify-between items-center">
						<ImQuotesLeft />
					</div>
					<p>
						{review.content}{' '}
						{/* <div className="flex space-x-2">
							<ImPencil
								className="cursor-pointer"
								onClick={() => handleUpdateReview(review.id)}
							/>
							<ImCross
								className="cursor-pointer text-red"
								onClick={() => handleDeleteReview(review.id)}
							/>
						</div> */}
					</p>
					<p className="text-lg font-medium"> {review.User.firstName}</p>
				</div>
			))}
		</div>
	);
};

export default ProductReview;
