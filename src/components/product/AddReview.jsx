import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { addReview, getProductReview } from '../../redux/actions/review.action';
import { getProductRate } from '../../redux/actions/ratings.action';
import Button from '../Button/Button';

const AddReviewForm = ({ productId, onReviewAdded }) => {
	const token = Cookies.get('token');
	const { loading } = useSelector((state) => state.review);
	const dispatch = useDispatch();
	const [reviewData, setReviewData] = useState({
		title: '',
		content: '',
		rating: 0,
	});

	const handleChange = (event) => {
		setReviewData({
			...reviewData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			dispatch(addReview(token, productId, reviewData));
			onReviewAdded();
			dispatch(getProductReview(productId));
			dispatch(getProductRate(productId));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex justify-center">
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700"
					>
						Title:
					</label>
					<input
						type="text"
						id="title"
						name="title"
						value={reviewData.title}
						onChange={handleChange}
						className="w-[500px] border-gray-300 rounded-md shadow-sm focus:ring-primaryGreen focus:border-primaryGreen sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="content"
						className="block text-sm font-medium text-gray-700"
					>
						Content:
					</label>
					<textarea
						id="content"
						name="content"
						value={reviewData.content}
						onChange={handleChange}
						className="w-[500px] border-gray-300 rounded-md shadow-sm focus:ring-primaryGreen focus:border-primaryGreen sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="rating"
						className="block text-sm font-medium text-gray-700"
					>
						Rating:
					</label>
					<input
						type="number"
						id="rating"
						name="rating"
						value={reviewData.rating}
						onChange={handleChange}
						className="w-[500px] border-gray-300 rounded-md shadow-sm focus:ring-primaryGreen focus:border-primaryGreen sm:text-sm"
					/>
				</div>
				<Button
					label="Add Review"
					loading={loading}
					className="flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primaryGreen hover:bg-primaryGreen-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryGreen"
				/>
			</form>
		</div>
	);
};

export default AddReviewForm;
