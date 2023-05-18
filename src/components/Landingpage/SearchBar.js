import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
	return (
		<form className="w-full h-1/3">
			<div className="flex items-center space-x-1 w-full md:w-3/4 bg-white h-full rounded-full px-2 ">
				<input
					placeholder="Search for product.... "
					id="search"
					name="search"
					type="text"
					autoComplete="true"
					className="w-11/12 h-full border-none  rounded-full  appearance-none outline-none"
				/>
				<FiSearch size={24} className="cursor-pointer w-1/12 text-black" />
			</div>
		</form>
	);
};

export default SearchBar;
