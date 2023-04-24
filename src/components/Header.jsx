import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="link">
			<Link to="/">Home</Link>
			<Link to="/Login" style={{ marginLeft: '10px' }}>
				Login
			</Link>
			<Link to="/signup">Signup</Link>
		</div>
	);
};

export default Header;
