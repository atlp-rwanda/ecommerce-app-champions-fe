import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Banner = () => {
	return (
		<div className="hidden md:flex bg-wheat px-8 py-4 h-6 justify-between  items-center  text-primaryGreen">
			<div className="flex items-center space-x-2">
				<BsFillTelephoneFill size={14} />
				<p>+250 787938344</p>
			</div>
			<p className="text-md">Get 50% off on selected Item , shop now</p>
			<div className="flex items-center">
				<span>Eng</span> <BiChevronDown size={22} />
			</div>
		</div>
	);
};

export default Banner;
