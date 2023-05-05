import React from 'react';
import InputError from './InputError';

const InputProduct = ({
	placeholder,
	type,
	error,
	name,
	id,
	isRequired,
	handleChange,
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
				className="appearance-none py-2 px-2 my-6 rounded-md w-full md:w-8/12"
				value={value || ''}
				multiple={multiple}
			/>
			{error && <InputError error={error} />}
		</div>
	);
};

export default InputProduct;
