import React from 'react';

const InputError = (props) => {
	const { error } = props;
	return <span className="text-sm text-lightRed px-2">{error}</span>;
};

export default InputError;
