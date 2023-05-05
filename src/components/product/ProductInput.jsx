import React from 'react';
import InputError from '../Auth/InputError';

const ProductInput = ({
	placeholder,
	type,
	error,
	name,
	id,
	isRequired,
	handleChange,
	className,
	labelFor,
	labelText,
	autoComplete,
	value,
	multiple,
}) => {
	return (
		<div className="flex flex-col">
			{labelText && (
				<label htmlFor={labelFor} className="px-1 text-grayish_blue text-sm">
					{labelText}
				</label>
			)}
			<input
				autoComplete={autoComplete}
				type={type}
				id={id}
				name={name}
				required={isRequired}
				placeholder={placeholder}
				onChange={handleChange}
				className={className}
				value={value}
				multiple={multiple}
			/>
			{error && <InputError error={error} />}
		</div>
	);
};

export default ProductInput;
