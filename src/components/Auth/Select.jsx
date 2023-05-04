import React from 'react';

function Select({
	labelFor,
	labelText,
	name,
	id,
	className,
	value,
	options,
	onChange,
}) {
	return (
		<div>
			<label htmlFor={labelFor}>{labelText}</label>
			<select
				name={name}
				id={id}
				className={className}
				value={value}
				onChange={onChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.text}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
