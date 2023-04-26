import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="link">
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
			<Link to="/ForgotPassword">Forget password</Link>
			<Link to="/ResetPassword">Reset Password</Link>
		</div>
	);
};

export default Header;
