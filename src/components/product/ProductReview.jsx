/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImQuotesLeft, ImPencil, ImCross } from 'react-icons/im';
import { AiFillDelete } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getProductRate } from '../../redux/actions/ratings.action';

import {
	deleteProductReview,
	getProductReview,
} from '../../redux/actions/review.action';
import LoadingSpinner from '../LoadingSpinner';

const ProductReview = ({ product }) => {
	const [clickedReviewId, setClickedReviewId] = useState(null);
	const { loading, results } = useSelector((state) => state.review);
	const dispatch = useDispatch();
	const token = Cookies.get('token');
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getProductReview(product));
	}, [dispatch, product]);

	if (loading === true) {
		return (
			<LoadingSpinner className="w-8 h-8 my-5 text-gray-200 animate-spin fill-primaryGreen" />
		);
	}

	const handleDeleteReview = async (event, reviewId, productId) => {
		event.preventDefault();
		setClickedReviewId(reviewId);
		if (!token) {
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		}
		dispatch(deleteProductReview(reviewId, token))
			.then(() => {
				dispatch(getProductReview(product));
				dispatch(getProductRate(productId));
			})
			.catch((error) => {
				toast.error('Failed to delete review.', {
					position: toast.POSITION.TOP_RIGHT,
				});
			});
	};

	const handleUpdateReview = (reviewId) => {};

	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 md:gap-3 my-4 ">
			{results?.data?.map((review) => (
				<div
					className=" flex flex-col space-y-1 md:space-y-2 h-42  justify-center items-center text-italic border border-lightYellow "
					key={review.id}
				>
					<div className="flex text-xl font-bold justify-between items-center">
						<ImQuotesLeft />
					</div>
					<p className="font-bold">{review.title}</p>
					<p className="italic">
						{review.content}
						<div className="flex space-x-2">
							<AiFillDelete
								className="cursor-pointer text-lightRed"
								onClick={(event) =>
									handleDeleteReview(event, review.id, review.productId)
								}
							/>
						</div>
					</p>
					<p className="text-lg font-bold"> {review.User.firstName}</p>
					<ToastContainer />
				</div>
			))}
		</div>
	);
};

export default ProductReview;
