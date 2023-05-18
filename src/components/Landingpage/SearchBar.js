import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
	return (
		<form className="w-full flex relative  p-0">
			<input
				placeholder="Search for product.... "
				id="search"
				name="search"
				type="text"
				autoComplete="true"
				className="w-full md:w-3/4 px-2 py-2 my-2 rounded-full border  bg-gray-200  appearance-none mr-0"
			/>
			<button type="submit" className="absolute top-4 left-3/4 font-bold ">
				<FiSearch size={24} />
			</button>
		</form>
	);
};

export default SearchBar;
