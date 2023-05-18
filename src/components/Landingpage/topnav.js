/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Logo from '../../assets/Logo.svg';
import { handleUserToken } from '../../redux/actions/token.action';
import {
	getBuyerProfile,
	getVendorProfile,
} from '../../redux/actions/auth.profile.action';
import SearchBar from './SearchBar';

const Topnav = ({ displaySearchBar }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [loggedinuser, setLoggedinuser] = useState('');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	const token = Cookies.get('token');
	const dispatch = useDispatch();
	const { decodedToken } = useSelector((state) => state.token || {});
	const { profile } = useSelector((state) => state.userProfile || {});
	useEffect(() => {
		dispatch(handleUserToken(token));
	}, [dispatch, token]);
	useEffect(() => {
		if (decodedToken) {
			if (decodedToken?.role.roleName === 'buyer') {
				dispatch(getBuyerProfile(decodedToken.id));
			} else if (decodedToken?.role.roleName === 'vendor') {
				dispatch(getVendorProfile(decodedToken.id));
			}
		}
	}, [decodedToken, dispatch]);
	useEffect(() => {
		if (profile) {
			setLoggedinuser(profile.data.others.firstName);
		}
	}, [profile]);
	return (
		<div className="relative  w-screen md:w-full bg-lightYellow px-7 py-2  flex  items-center">
			<Link to="/">
				<img src={Logo} className="w-32 md:w-40 cursor-pointer" alt="Logo" />
			</Link>
			<h1 className="hidden middle:block  font-bold ml-12 text-primaryGreen">
				<Link to="/product">Products</Link>
			</h1>
			<button
				className="block lg:hidden text-primaryGreen absolute right-7 "
				onClick={toggleMenu}
			>
				<GiHamburgerMenu size={40} />
			</button>
			<div className="hidden  lg:flex flex-col lg:flex-row justify-end  w-3/4 ml-24">
				{displaySearchBar && <SearchBar />}
				<div className="w-1/4 flex flex-col lg:flex-row justify-between items-center  ">
					{decodedToken ? (
						<div className="relative flex items-center cursor-pointer text-primaryGreen">
							<BsFillPersonFill size={40} />
							<h1 className="font-bold">{loggedinuser}</h1>
							<BiChevronDown size={30} onClick={handleDropdown} />
							{isDropdownOpen && (
								<div className="absolute bg-white rounded border shadow-lg mt-2 top-7 right-0">
									<h1 className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold">
										<Link to="/Profile">Profile</Link>
									</h1>
									<h1 className="flex px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold">
										<AiOutlineLogout
											size={25}
											className="text-primaryGreen cursor-pointer"
											onClick={() => {
												Cookies.remove('token', { path: '/' });
											}}
										/>
										Logout
									</h1>
								</div>
							)}
						</div>
					) : (
						<div>
							<h1 className="flex items-center justify-center p-1 rounded-2xl border  bg-brightGray text-primaryGreen font-bold my-4  w-28">
								<Link to="/login">Login</Link>
							</h1>
						</div>
					)}

					<button className="text-primaryGreen">
						<Link to="/cart">
							<MdAddShoppingCart size={40} />
						</Link>
					</button>
				</div>
			</div>

			{showMenu && (
				<div className="flex h-screen lg:hidden pt-10 flex-col items-center mt-50  w-3/4 md:w-3/4  bg-gray absolute top-7 right-7 rounded border shadow-lg z-10 ">
					<div className="w-3/4  ">{displaySearchBar && <SearchBar />}</div>
					<div className="flex items-center justify-center my-5 w-3/4">
						<h1 className=" middle:hidden  font-bold  text-primaryGreen">
							<Link to="/product">Products</Link>
						</h1>
					</div>
					<div className="w-1/4  flex flex-col justify-between items-center  mb-10 ">
						{decodedToken ? (
							<div className="relative flex items-center cursor-pointer text-primaryGreen">
								<BsFillPersonFill size={40} />
								<h1 className="font-bold">{loggedinuser}</h1>
								<BiChevronDown size={30} onClick={handleDropdown} />
								{isDropdownOpen && (
									<div className="absolute bg-white rounded border shadow-lg mt-2 top-7 right-0">
										<h1 className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold">
											<Link to="/Profile">Profile</Link>
										</h1>
										<h1 className="flex px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold">
											<AiOutlineLogout
												size={25}
												className="text-primaryGreen cursor-pointer"
												onClick={() => {
													Cookies.remove('token', { path: '/' });
												}}
											/>
											Logout
										</h1>
									</div>
								)}
							</div>
						) : (
							<div>
								<h1 className="flex items-center justify-center p-1 rounded-2xl border  bg-brightGray text-primaryGreen font-bold my-4  w-28">
									<Link to="/login">Login</Link>
								</h1>
							</div>
						)}
						<button className="text-primaryGreen mt-5">
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
