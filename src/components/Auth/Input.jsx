import React from 'react';

const Input = ({ placeholder }) => {
	return (
		<div>
			<input
				type="text"
				placeholder={placeholder}
				className="py-2 px-2 my-3 rounded-md w-2/4"
			/>
		</div>
	);
};

export default Input;
