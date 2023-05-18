/* eslint-disable */
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
import Footer from '../components/Landingpage/Footer';

const fieldState = {};
userloginFields.forEach((field) => (fieldState[field.id] = ''));

const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user, loading } = useSelector((state) => state.login || {});
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
		}, 8000);
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	return (
		<div>
			<div className="flex flex-row items-center w-screen h-screen space-x-0 md:space-x-0">
				<div className="items-center justify-center hidden w-2/5 md:3/5 md:flex">
					<img src={Loginphoto} alt="secureloginphoto" className="w-9/12" />
				</div>
				<div className="flex flex-col w-full h-full md:w-3/5 bg-brightGray p-9">
					<div className="flex flex-col justify-center w-full px-3 md:w-4/5 h-4/5">
						<h3 className="my-2 text-2xl font-bold font-extrabold text-left text-yellow">
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
									className="w-11/12 px-2 py-2 my-2 rounded-md appearance-none"
								/>
							))}
							<Button
								loading={loading}
								label="Login"
								className="flex items-center justify-center p-1 my-2 font-bold text-white rounded-2xl bg-primaryGreen w-28"
							/>
						</form>
						<ToastContainer />
						<GoogleButton
							label="Sign in with Google"
							className="font-bold text-white bg-wheat "
						/>
						<div className="flex flex-row space-x-3 py-2 my-2">
							<Link to="/Buyer" className="text-lightBlue underline">
								Signup
							</Link>
							<Link to="/ForgotPassword" className="underline text-lightBlue">
								Forgot password
							</Link>
						</div>
					</div>
				</div>
			</div>

			<Footer />
			<ToastContainer />
		</div>
	);
};

export default LoginPage;
