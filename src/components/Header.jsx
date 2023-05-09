/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/navLinks';

const Header = () => {
	return (
		<div className="link bg-[#92E3A9] text-center fixed w-full z-10 h-[3.5em] leading-[3.5em] inline-block mb-0 pl-0 left-0">
			{navLinks.map((link, index) => (
				<Link key={index} to={link.path} className="nav px-4">
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default Header;
