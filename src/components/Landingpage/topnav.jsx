/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { handleToken, handleLogout } from '../../redux/actions/token.action';
import SearchBar from './SearchBar';

const Topnav = ({ displaySearchBar, className, handleSearch }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const navigate = useNavigate();

	const handleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	const dispatch = useDispatch();
	const { decodedToken, token, name } = useSelector(
		(state) => state.token || {}
	);

	const logout = () => {
		dispatch(handleLogout());
		dispatch(handleToken()).then(() => navigate('/'));
	};

	useEffect(() => {
		dispatch(handleToken());
	}, [dispatch]);
	const fixedClassNames =
		'w-full bg-lightYellow px-8 py-2  flex  items-center justify-between';
	return (
		<div className={className || fixedClassNames}>
			<div className="flex items-center w-1/3 space-x-5 ">
				<Link to="/">
					<img src={Logo} className="cursor-pointer w-52 md:w-40" alt="Logo" />
				</Link>
				<h1 className="hidden font-bold md:block text-primaryGreen">
					<Link to="/product">Products</Link>
				</h1>
			</div>

			<button
				className="block lg:hidden text-primaryGreen absolute right-7 z-11  "
				onClick={toggleMenu}
			>
				{showMenu ? <GrClose size={40} /> : <GiHamburgerMenu size={40} />}
			</button>
			<div className="flex-col items-center justify-end hidden w-11/12 h-full mx-auto lg:flex lg:flex-row">
				{displaySearchBar && <SearchBar handleSearch={handleSearch} />}
				<div className="flex flex-col items-center justify-between w-1/4 lg:flex-row ">
					{token && (
						<div className="flex items-center cursor-pointer text-primaryGreen">
							<BsFillPersonFill size={28} />
							<h1 className="font-bold">{name}</h1>
							<BiChevronDown size={30} onClick={handleDropdown} />
							{isDropdownOpen && (
								<div className="absolute right-15 mt-11 bg-gray border rounded shadow-lg top-7 z-20">
									<h1 className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">
										<Link to="/Profile">Profile</Link>
									</h1>
									<h1 className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">
										<Link to="/order">Orders</Link>
									</h1>
									<h1 className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">
										<Link to="/wishlist">Wishlist</Link>
									</h1>
									<h1
										className="flex px-4 py-2 font-bold text-gray-800 hover:bg-gray-200"
										onClick={() => logout()}
									>
										<AiOutlineLogout
											size={25}
											className="cursor-pointer text-primaryGreen"
										/>
										Logout
									</h1>
								</div>
							)}
						</div>
					)}

					{!token && (
						<div>
							<Link
								to="/login"
								className="flex items-center justify-center p-1 my-4 font-bold border rounded-2xl bg-brightGray text-primaryGreen w-28"
							>
								<Link to="/login">Login</Link>
							</Link>
						</div>
					)}

					<button className="text-primaryGreen">
						<Link to="/cart">
							<MdAddShoppingCart size={32} />
						</Link>
					</button>
				</div>
			</div>
			{showMenu && (
				<div className="flex h-screen lg:hidden pt-10 flex-col items-center mt-50  w-3/4 md:w-3/4  bg-gray absolute top-14 md:top-22 right-7 rounded border shadow-lg z-10 ">
					<div className="w-3/4  ">
						{displaySearchBar && <SearchBar handleSearch={handleSearch} />}
					</div>
					<div className="flex items-center justify-center my-5 w-3/4">
						<h1 className=" md:hidden  font-bold  text-primaryGreen">
							<Link to="/product">Products</Link>
						</h1>
					</div>
					<div className="flex flex-col items-center justify-between w-1/4 mb-10 ">
						{token ? (
							<div className="relative flex items-center cursor-pointer text-primaryGreen">
								<BsFillPersonFill size={40} />
								<h1 className="font-bold">{name}</h1>
								<BiChevronDown size={30} onClick={handleDropdown} />
								{isDropdownOpen && (
									<div className="absolute right-0 mt-2 bg-white border rounded shadow-lg top-7">
										<h1 className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">
											<Link to="/Profile">Profile</Link>
										</h1>
										<h1 className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">
											<Link to="/order">Orders</Link>
										</h1>
										<h1 className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">
											<Link to="/wishlist">Wishlist</Link>
										</h1>
										<h1
											className="flex px-4 py-2 font-bold text-gray-800 hover:bg-gray-200"
											onClick={() => logout()}
										>
											<AiOutlineLogout
												size={25}
												className="cursor-pointer text-primaryGreen"
											/>
											Logout
										</h1>
									</div>
								)}
							</div>
						) : (
							<div>
								<h1 className="flex items-center justify-center p-1 my-4 font-bold border rounded-2xl bg-brightGray text-primaryGreen w-28">
									<Link to="/login">Login</Link>
								</h1>
							</div>
						)}
						<button className="mt-5 text-primaryGreen">
							<Link to="/cart">
								<MdAddShoppingCart size={40} />
							</Link>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Topnav;
