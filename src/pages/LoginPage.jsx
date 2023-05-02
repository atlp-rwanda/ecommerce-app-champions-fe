const LoginPage = () => {
	return (
		<div className="w-screen h-screen flex flex-col md:flex-row">
			<div className="md:w-2/5 flex items-center justify-center">
				<img src={Loginphoto} alt="secureloginphoto" className="w-9/12" />
			</div>
			<div className="w-full md:w-3/5 flex flex-col justify-center p-4 md:p-9 bg-brightGray">
				<h3 className="text-left font-extrabold text-2xl font-bold text-yellow py-4">
					Sign Into Your Account
				</h3>
				<form action="">
					<Input type="email" placeholder="Email" classname="w-full md:w-80" />
					<Input
						type="password"
						placeholder="Password"
						classname="w-full md:w-80"
					/>
					<Button
						label="Login"
						className="bg-primaryGreen mt-3 text-white font-bold"
					/>
				</form>
				<GoogleButton
					label="Sign in with Google"
					className="bg-wheat text-white font-bold w-full md:w-80"
				/>
				<div className="flex flex-row space-x-3 mt-6 py-2">
					<Link to="/signup" className="text-lightBlue underline">
						Signup
					</Link>
					<Link to="/Reset" className="text-lightBlue underline">
						Forgot password
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
