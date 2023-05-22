import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { updateProductReview } from '../../redux/actions/review.action';

const UpdateReviewForm = ({ reviewId, existingData, onUpdate }) => {
	const token = Cookies.get('token');
	const dispatch = useDispatch();
	const [reviewData, setReviewData] = useState({
		title: existingData.title,
		content: existingData.content,
		rating: existingData.rating,
	});

	useEffect(() => {
		setReviewData({
			title: existingData.title,
			content: existingData.content,
			rating: existingData.rating,
		});
	}, [existingData]);

	const handleChange = (event) => {
		setReviewData({
			...reviewData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			dispatch(updateProductReview(reviewId, reviewData, token));
			onUpdate(); // Callback to handle successful update (e.g., close the form)
		} catch (error) {
			// Handle error if review update fails
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input
					type="text"
					name="title"
					value={reviewData.title}
					onChange={handleChange}
				/>
			</label>
			<label>
				Content:
				<textarea
					name="content"
					value={reviewData.content}
					onChange={handleChange}
				/>
			</label>
			<label>
				Rating:
				<input
					type="number"
					name="rating"
					value={reviewData.rating}
					onChange={handleChange}
				/>
			</label>
			<button type="submit">Update Review</button>
		</form>
	);
};

export default UpdateReviewForm;
