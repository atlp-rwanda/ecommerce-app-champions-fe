import React, { useState } from 'react';

function DeleteProduct({ productName, onDelete }) {
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleDelete = () => {
		onDelete();
		setShowConfirmation(false);
	};

	return (
		<>
			<button
				type="submit"
				className="px-4 py-2 my-2 font-bold text-white rounded-2xl bg-primaryGreen w-28"
				onClick={() => setShowConfirmation(true)}
			>
				Delete
			</button>

			{showConfirmation && (
				<div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-300">
					<div className="p-6 bg-white rounded-lg shadow-xl">
						<p className="mb-4">
							Are you sure you want to delete {productName}?
						</p>
						<div className="flex justify-end">
							<button
								type="submit"
								className="px-4 py-2 mr-2 font-bold text-white rounded-2xl bg-primaryGreen w-28"
								onClick={handleDelete}
							>
								Yes
							</button>
							<button
								type="submit"
								className="px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
								onClick={() => setShowConfirmation(false)}
							>
								No
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default DeleteProduct;
