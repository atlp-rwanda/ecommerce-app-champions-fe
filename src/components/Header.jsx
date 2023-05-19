/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/navLinks';

const Header = () => {
	return (
		<div className=" bg-[#92E3A9] text-center  w-full  inline-block mb-0 pl-0 left-0">
			{navLinks.map((link, index) => (
				<Link key={index} to={link.path} className="px-4 nav">
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default Header;
