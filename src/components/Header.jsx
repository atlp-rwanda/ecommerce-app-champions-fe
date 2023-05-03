/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/navLinks';

const Header = () => {
	return (
		<div className="link">
			{navLinks.map((link, index) => (
				<Link key={index} to={link.path} className="px-4">
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default Header;
