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
			<Link to="/" className="px-4">
				Home
			</Link>
			<Link to="/Login" className="px-4">
				Login
			</Link>
			<Link to="/buyer" className="px-4">
				Buyer
			</Link>
			<Link to="/vendor" className="px-4">
				Vendor
			</Link>
			<Link to="/signup" className="px-4">
				Signup
			</Link>
			<Link to="/ForgotPassword">Forget password</Link>
			<Link to="/ResetPassword">Reset Password</Link>
			<Link to="/signup">Signup</Link>
			<Link to="/auth">Auth</Link>
		</div>
	);
};

export default Header;
