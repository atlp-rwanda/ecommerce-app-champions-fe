import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import TwoFactorAuth from './Two-factor-auth';

const AllPages = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/Login" element={<Login />} />
			<Route path="/auth" element={<TwoFactorAuth />} />
		</Routes>
	);
};

export default AllPages;
