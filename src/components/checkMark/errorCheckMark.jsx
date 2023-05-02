import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setError } from '../../redux/reducers/Auth/AuthSlice';

const FailCheckmark = ({ error }) => {
	const pathVariants = {
		hidden: { pathLength: 0, pathOffset: 1 },
		visible: { pathLength: 1, pathOffset: 0 },
	};

	const dispatch = useDispatch();
	setTimeout(() => {
		dispatch(setError());
	}, 3000);
	return (
		<div className="flex items-center justify-center p-2 bg-white rounded-full z-10 w-full md:w-[350px] relative md:right-[-80px] md:bottom-[30px]">
			<div className="relative w-10 h-10">
				<svg
					className="absolute top-0 left-0 w-full h-full text-red"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<motion.path
						strokeDasharray="1 0"
						strokeLinecap="round"
						strokeWidth="2"
						variants={pathVariants}
						initial="hidden"
						animate="visible"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
				<div className="absolute top-0 left-0 w-full h-full border-2 border-red-500 rounded-full" />
			</div>
			<motion.p
				className="text-red-500 font-semibold text-lg leading-tight ml-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
			>
				{error}
			</motion.p>
		</div>
	);
};

export default FailCheckmark;
