import React from 'react';

const Header = ({ category, title }) => (
	<div>
		<p className="text-lg text-gray-400">{category}</p>
		<p className="header text-3xl font-extrabold tracking-tight text-slate-900">
			{title}
		</p>
	</div>
);

export default Header;
