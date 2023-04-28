import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<h1>This is login page</h1>
			<Link to="/ForgotPassword">forget password</Link>
		</div>
	);
};

export default Login;
