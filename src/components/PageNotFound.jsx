import React from 'react';
import { BsEmojiFrown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className="w-screen h-screen flex items-center">
			<div className="flex flex-col w-1/2 h-3/4 space-y-10  py-10 items-center mx-auto ">
				<BsEmojiFrown size={50} />
				<h1 className="text-xl text-primaryGreen font-bold">404</h1>
				<h2>Page Not Found</h2>
				<Link to="/">Return to Home page</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
