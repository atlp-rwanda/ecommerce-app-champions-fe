/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import { userloginFields } from '../constants/formFields';
import Input from '../components/Auth/Input';
import Loginphoto from '../assets/login-illustration.svg';
import GoogleButton from '../components/Button/GoogleButton';
import { login } from '../redux/actions/auth.loginActions';
import 'react-toastify/dist/ReactToastify.css';

const fieldState = {};
userloginFields.forEach((field) => (fieldState[field.id] = ''));

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user, loading } = useSelector((state) => state.login);
	const [loginState, setLoginState] = useState(fieldState);

	const handleChange = (e) =>
		setLoginState({ ...loginState, [e.target.id]: e.target.value });

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login(loginState));
	};

	useEffect(() => {
		setTimeout(() => {
			if (user?.data?.others?.RoleId === 1) return navigate('/admin');

			if (user?.data?.others?.RoleId === 3) return navigate('/');

			if (user?.hashedOTP) return navigate('/auth');
		}, 9000);
	}, [user]);

	return (
		<div className="w-screen h-screen flex flex-row space-x-0 md:space-x-0 items-center">
			<div className="hidden w-2/5 md:3/5 md:flex items-center justify-center">
				<img src={Loginphoto} alt="secureloginphoto" className="w-9/12" />
			</div>
			<div className="w-full md:w-3/5 flex flex-col h-full bg-brightGray p-9">
				<div className="w-full md:w-4/5 h-4/5 px-3 flex flex-col justify-center">
					<h3 className="text-left font-extrabold text-2xl font-bold text-yellow my-2">
						Sign Into Your Account
					</h3>
					<form onSubmit={handleLogin} id="loginForm">
						{userloginFields.map((field) => (
							<Input
								key={field.id}
								placeholder={field.placeholder}
								type={field.type}
								id={field.id}
								name={field.name}
								value={loginState[field.id]}
								isRequired={field.isRequired}
								labelText={field.labelText}
								labelFor={field.labelFor}
								autoComplete={field.autoComplete}
								handleChange={handleChange}
								className="appearance-none py-2 px-2 my-2 rounded-md w-11/12"
							/>
						))}
						<Button
							loading={loading}
							label="Login"
							className="flex items-center justify-center p-1 rounded-2xl bg-primaryGreen text-white font-bold my-2 w-28"
						/>
					</form>
					<ToastContainer />
					<GoogleButton
						label="Sign in with Google"
						className="bg-wheat text-white font-bold "
					/>
					<div className="flex flex-row space-x-3 py-2 my-2">
						<Link to="/Buyer" className="text-lightBlue underline">
							Buyer Signup
						</Link>
						<Link to="/Vendor" className="text-lightBlue underline">
							Vendor Signup
						</Link>
						<Link to="/ForgotPassword" className="text-lightBlue underline">
						<Link to="/Reset" className="text-lightBlue underline">
							Forgot password
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
