/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { handleToken, handleLogout } from '../../redux/actions/token.action';
import SearchBar from './SearchBar';

const Topnav = ({ displaySearchBar, className }) => {
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
				className="block md:hidden text-primaryGreen right-7 "
				onClick={toggleMenu}
			>
				<GiHamburgerMenu size={36} />
			</button>
			<div className="flex-col items-center justify-end hidden w-11/12 h-full mx-auto lg:flex lg:flex-row">
				{displaySearchBar && <SearchBar />}
				<div className="flex flex-col items-center justify-between w-1/4 lg:flex-row ">
					{token && (
						<div className="flex items-center cursor-pointer text-primaryGreen">
							<BsFillPersonFill size={28} />
							<h1 className="font-bold">{name}</h1>
							<BiChevronDown size={30} onClick={handleDropdown} />
							{isDropdownOpen && (
								<div className="absolute right-8 mt-11 bg-gray border rounded shadow-lg top-7">
									<h1 className="block px-6 py-2 font-bold text-gray-800 hover:bg-gray-200">
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
				<div className="absolute z-10 flex flex-col items-center w-3/4 h-screen pt-10 border rounded shadow-lg lg:hidden mt-50 md:w-3/4 bg-gray top-7 right-7 ">
					<div className="w-3/4 ">{displaySearchBar && <SearchBar />}</div>
					<div className="flex items-center justify-center w-3/4 my-5">
						<h1 className="font-bold middle:hidden text-primaryGreen">
							<Link to="/product">Products</Link>
						</h1>
					</div>
					<div className="flex flex-col items-center justify-between w-1/4 mb-10 ">
						{decodedToken ? (
							<div className="relative flex items-center cursor-pointer text-primaryGreen">
								<BsFillPersonFill size={40} />
								<h1 className="font-bold">{name}</h1>
								<BiChevronDown size={30} onClick={handleDropdown} />
								{isDropdownOpen && (
									<div className="absolute right-0 mt-2 bg-white border rounded shadow-lg top-7">
										<h1 className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">
											<Link to="/Profile">Profile</Link>
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
