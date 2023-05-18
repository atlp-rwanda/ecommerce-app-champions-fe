/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Homeimage from '../assets/home.png';
import Topnav from '../components/Landingpage/topnav';
import Footer from '../components/Landingpage/Footer';
import Homeproduct from '../components/Landingpage/Availableproduct';

const HomePage = () => {
	return (
		<div>
			<div className="w-screen md:w-full bg-wheat px-7 py-3 h-6 flex justify-between  items-center  text-primaryGreen">
				<p className="hidden md:flex justify-center items-center">
					<BsFillTelephoneFill /> +250 787938344
				</p>
				<p className="hidden md:flex justify-center items-center">
					Get 50% off on selected Item , shop now
				</p>
				<p className="flex  justify-center items-center">
					<span>Eng</span> <BiChevronDown />
				</p>
			</div>
			<Topnav displaySearchBar />
			<div className="w-screen h-auto md:h-screen md:w-full bg-lightYellow   flex flex-col flex-col-reverse md:flex-row justify-between  items-center">
				<div className="px-5">
					<h1 className="text-5xl md:text-7xl text-primaryGreen font-bold">
						Shopping and Shipping Made Easier
					</h1>
					<p className="mt-5 text-2xl">
						You can buy and sell any product on our <br /> platform easily and
						the shipping is made directly
					</p>
					<button className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-5 w-28">
						<Link to="/product">more</Link>
					</button>
				</div>
				<div className="w-full h-2/4   md:w-2/4 md:h-3/4">
					<img
						src={Homeimage}
						className=" w-full h-full  cursor-pointer"
						alt="Homeimage"
					/>
				</div>

				<div />
			</div>
			<Homeproduct />
			<Footer />
		</div>
	);
};

export default HomePage;
