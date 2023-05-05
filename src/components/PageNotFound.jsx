import React from 'react';
import { BsEmojiFrown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className="w-screen h-screen flex items-center text-black">
			<div className="flex flex-col justify-between w-1/2 h-3/4 space-y-10  py-10 items-center mx-auto ">
				<BsEmojiFrown size={55} className="animate-bounce" />
				<div className="flex flex-col items-center justify-center space-y-3">
					<h1 className="text-7xl md:text-9xl text-primaryGreen font-bold">
						404
					</h1>
					<h2 className="text-center">Page Not Found</h2>
				</div>
				<Link to="/" className="underline text-xl">
					Return to Home page
				</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
