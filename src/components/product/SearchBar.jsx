import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
	const [searchParam, setSearchParam] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	const handleSearch = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.get(
				`/api/products?searchParam=${searchParam}`
			);
			setSearchResult(response.data.data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleSearchParamChange = (event) => {
		setSearchParam(event.target.value);
	};

	return (
		<div className="flex flex-col items-center">
			<form onSubmit={handleSearch} className="flex flex-col items-center">
				<input
					type="text"
					value={searchParam}
					onChange={handleSearchParamChange}
					placeholder="Search for a product"
					className="border rounded py-2 px-3 mb-2"
				/>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Search
				</button>
			</form>
			{searchResult.length > 0 && (
				<ul className="mt-4">
					{searchResult.map((product) => (
						<li key={product.productId} className="py-2">
							{product.productName} - {product.productPrice}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchBar;
