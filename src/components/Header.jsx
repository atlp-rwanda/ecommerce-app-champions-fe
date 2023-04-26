import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="link">
			<Link to="/">Home</Link>
			<Link to="/Login" style={{ marginLeft: '10px' }}>
				Login
			</Link>
			<Link to="/buyer">Buyer</Link>
			<Link to="/vendor">Vendor</Link>
		</div>
	);
};

export default Header;
