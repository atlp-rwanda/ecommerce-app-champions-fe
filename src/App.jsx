import { Routes, Route } from 'react-router-dom';
import AllProducts from './components/allProducts';
import Login from './pages/Login';
import Home from './pages/Home';

import { Header } from './components/Header';

import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
			<AllProducts />
		</div>
	);
}

export default App;
