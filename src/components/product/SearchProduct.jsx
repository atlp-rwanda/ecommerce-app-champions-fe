/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../../redux/actions/searchProduct.action';
import Button from '../Button/Button';

const SearchComponent = ({ searchedItems, onEmptySearch }) => {
	const [searchParam, setSearchParam] = useState('');
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.searchProduct);
	const handleSearch = (event) => {
		event.preventDefault();
		if (searchParam.trim() === '') {
			onEmptySearch();
			return;
		}
		dispatch(searchProducts(searchParam)).then((response) => {
			searchedItems(response?.data);
		});
	};

	useEffect(() => {
		if (searchParam === '') {
			onEmptySearch();
		}
	}, [searchParam, onEmptySearch]);

	return (
		<div>
			<form onSubmit={handleSearch} className="flex items-center my-10">
				<input
					type="text"
					value={searchParam}
					placeholder="Search for a product here"
					onChange={(e) => setSearchParam(e.target.value)}
					className="w-96 rounded-l-2xl"
				/>
				<Button
					label="Search"
					loading={loading}
					className="flex items-center justify-center p-2 py-[9.5px] rounded-r-2xl bg-primaryGreen text-white font-bold w-28"
				/>
			</form>
		</div>
	);
};
export default SearchComponent;
