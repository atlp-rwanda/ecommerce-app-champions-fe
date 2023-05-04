import React from 'react';
import InputError from './InputError';

/**
 * this is the input componennt where the user can pass the values
 *
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} email
 * @param {string} password
 * @returns
 */

const Input = (props) => {
	const {
		placeholder,
		type,
		error,
		name,
		id,
		isRequired,
		handleChange,
		className,
		labelText,
		autoComplete,
		value,
		disabled = false,
	} = props;
	return (
		<div className="flex flex-col">
			{labelText && (
				<label htmlFor={id} className="px-1 text-grayish_blue text-sm">
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
				disabled={disabled}
			/>
			{error && <InputError error={error} />}
		</div>
	);
};

export default Input;
