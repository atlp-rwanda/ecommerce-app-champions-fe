/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';
import Header from '../components/Header';
import Logo from '../assets/Logo.svg';
import Homeimage from '../assets/home.png';
import Button from '../components/Button/Button';

import Input from '../components/Auth/PasswordInput';
import { searchField } from '../constants/formFields';
import Footer from '../components/Landingpage/Footer';

const HomePage = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<div>
			<div className="w-screen md:w-full bg-wheat px-7 py-2 h-6 flex justify-between  items-center  text-primaryGreen">
				<p className="hidden md:flex">
					<BsFillTelephoneFill /> +250 787938344
				</p>
				<p className="hidden md:flex">
					Get 50% off on selected Item , shop now
				</p>
				<p className="flex items-center">
					<span>Eng</span> <BiChevronDown />
				</p>
			</div>
			<div className="relative  w-screen md:w-full bg-lightYellow px-7  flex  items-center">
				<img src={Logo} className="w-32 md:w-40 cursor-pointer" alt="Logo" />
				<h1 className="font-bold ml-12 text-primaryGreen">Products</h1>
				<button
					className="block lg:hidden text-primaryGreen absolute right-7 "
					onClick={toggleMenu}
				>
					<GiHamburgerMenu size={40} />
				</button>
				<div className="hidden  lg:flex flex-col lg:flex-row justify-between w-3/4 ml-24">
					<div className="w-3/4">
						<form>
							<Input
								key={searchField.id}
								placeholder={searchField.placeholder}
								type={searchField.type}
								id={searchField.id}
								name={searchField.name}
								isRequired={searchField.isRequired}
								autoComplete={searchField.autoComplete}
								className=" w-full md:w-2/4 px-2 py-2 my-2 rounded-full border  bg-gray-200  appearance-none"
							/>
						</form>
					</div>
					<div className="w-1/4 flex flex-col lg:flex-row justify-between items-center  ">
						<span className="flex items-center cursor-pointer text-primaryGreen">
							<BsFillPersonFill size={40} />
							<h1 className="font-bold">Account</h1>
						</span>
						<button className="text-primaryGreen">
							<MdAddShoppingCart size={40} />
						</button>
					</div>
				</div>

				{showMenu && (
					<div className="flex  lg:hidden flex-col items-center mt-50 justify-between w-3/4 md:w-3/4  bg-gray absolute top-7 right-7 ">
						<div className="w-3/4 mt-10">
							<form>
								<Input
									key={searchField.id}
									placeholder={searchField.placeholder}
									type={searchField.type}
									id={searchField.id}
									name={searchField.name}
									isRequired={searchField.isRequired}
									autoComplete={searchField.autoComplete}
									className=" w-full md:w-2/4 px-2 py-2 my-2 rounded-full border  bg-gray-200  appearance-none"
								/>
							</form>
						</div>
						<div className="w-1/4  flex flex-col justify-between items-center  mb-10 ">
							<span className="flex items-center cursor-pointer text-primaryGreen">
								<BsFillPersonFill size={40} />
								<h1 className="font-bold mt-5">Account</h1>
							</span>
							<button className="text-primaryGreen mt-5">
								<MdAddShoppingCart size={40} />
							</button>
						</div>
					</div>
				)}
			</div>

			<div className="w-screen h-100 md:w-full bg-lightYellow   flex justify-between  items-center">
				<div className="px-5">
					<h1 className="text-5xl md:text-8xl text-primaryGreen font-bold">
						Shopping and Shipping Made Easier
					</h1>
					<p>
						You can buy and sell any product on our <br /> platform easily and
						the shipping is made directly
					</p>
					<Button
						type="button"
						label="Learn more"
						className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
					/>
				</div>
				<div className="w-full md:w-2/4 h-3/4">
					<img
						src={Homeimage}
						className="hidden sm:block w-full h-full  cursor-pointer"
						alt="Logo"
					/>
				</div>

				<div />
			</div>

			<Header />

			<Footer />
		</div>
	);
};

export default HomePage;
