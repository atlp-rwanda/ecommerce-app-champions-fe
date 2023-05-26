import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
	const [searchParam, setSearchParam] = useState('');
	const navigate = useNavigate();
	const handleSearch = (event) => {
		event.preventDefault();
		if (searchParam.trim() === '') {
			return;
		}
		const searchQuery = encodeURIComponent(searchParam);
		navigate(`/?search=${searchQuery}`);
		setSearchParam('');
	};
	return (
		<form onSubmit={handleSearch} className="w-full h-2/3">
			<div className="flex items-center space-x-1 w-full md:w-3/4 bg-white h-full rounded-full px-2 ">
				<input
					placeholder="Search for product.... "
					id="search"
					name="search"
					type="text"
					autoComplete="true"
					className="w-11/12 h-full border-none  rounded-full  appearance-none outline-none"
					onChange={(e) => setSearchParam(e.target.value)}
					value={searchParam}
				/>
				<button type="submit" className="p-0">
					<FiSearch size={24} className="cursor-pointer w-full text-black" />
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
