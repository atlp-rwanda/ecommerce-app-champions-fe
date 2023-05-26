/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ handleSearch }) => {
	const [searchParam, setSearchParam] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (searchParam.trim() === '') {
			return;
		}
		const searchQuery = encodeURIComponent(searchParam);
		handleSearch(searchQuery);
	};
	return (
		<form onSubmit={handleSubmit} className="w-full h-2/3">
			<div className="flex items-center space-x-1 w-full md:w-3/4 bg-white h-full rounded-full px-2 ">
				<input
					placeholder="Search for product.... "
					id="search"
					name="search"
					type="text"
					autoComplete="true"
					className="w-11/12 h-full border-none  rounded-full  appearance-none outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent"
					onChange={(e) => setSearchParam(e.target.value)}
					value={searchParam}
				/>
				<button type="submit" className="p-0">
					<FiSearch
						size={24}
						className="cursor-pointer w-full text-black font-bold"
					/>
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
