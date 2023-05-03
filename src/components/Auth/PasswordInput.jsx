import React from 'react';

const Input = ({
	placeholder,
	value,
	onChange,
	type,
	name,
	autoComplete,
	error,
	labelText,
	labelFor,
}) => {
	return (
		<div className="flex flex-col">
			{labelText && (
				<label htmlFor={labelFor} className="px-1 text-grayish_blue text-sm">
					{labelText}
				</label>
			)}
			<input
				type={type}
				placeholder={placeholder}
				className="appearance-none py-2 px-2 my-2 rounded-md  sm:w-9/12"
				name={name}
				value={value}
				onChange={onChange}
				autoComplete={autoComplete}
			/>
			{error && <div className="text-red">{error}</div>}
		</div>
	);
};

export default Input;
