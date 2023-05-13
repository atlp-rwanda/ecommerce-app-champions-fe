/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../../redux/actions/searchProduct.action';

const SearchComponent = () => {
	const [searchParam, setSearchParam] = useState('');
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.searchProduct);
	const handleSearch = (event) => {
		event.preventDefault();
		dispatch(searchProducts(searchParam));
	};
	return (
		<div>
			<form onSubmit={handleSearch}>
				<input
					type="text"
					value={searchParam}
					onChange={(e) => setSearchParam(e.target.value)}
				/>
				<button type="submit">search</button>
			</form>
			{loading ? <p>loading......</p> : error ? <p>error :{error}</p> : null}
		</div>
	);
};
export default SearchComponent;
