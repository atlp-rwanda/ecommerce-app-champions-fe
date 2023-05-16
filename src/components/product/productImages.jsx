/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const ProductImages = ({ images }) => {
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	const handleImageClick = (index) => {
		setActiveImageIndex(index);
	};

	return (
		<div className="flex flex-col border-0 items-center justify-center pt-0 mx-auto bg-gray-100 sm:bg-white ">
			{images && images.length > 0 ? (
				<>
					<div className="bg-lightGray rounded-lg overflow-hidden shadow-lg px-10">
						<img
							src={images[activeImageIndex]}
							alt=""
							className=" sm:w-2/3 md:w-3/4 lg:w-80 lg:h-80  object-contain "
						/>
					</div>
					<div className=" pt-0 sm:py-2 bg-opacity-50 lg:items-center ">
						<div className=" flex gap-x-2 justify-start mt-0 pt-7">
							{images.map((image, index) => (
								<button
									key={image}
									className={`${
										index === activeImageIndex ? 'bg-white' : 'bg-white'
									} w-full h-full mx-0 `}
									onClick={() => handleImageClick(index)}
								>
									<img
										src={image}
										alt=""
										className="w-24 h-24 object-cover border-gray-400"
									/>
								</button>
							))}
						</div>
					</div>
				</>
			) : (
				<div className="h-96 bg-gray-300 flex justify-center items-center">
					No image available
				</div>
			)}
		</div>
	);
};

export default ProductImages;
