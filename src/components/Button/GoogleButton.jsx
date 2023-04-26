/* eslint-disable import/no-extraneous-dependencies */
import { FaGoogle } from 'react-icons/fa';

const GoogleButton = ({ label, className }) => {
	return (
		<button
			type="button"
			className={`px-8 py-1 ${className} mt-4 rounded-2xl flex items-center w-2/4`}
		>
			<FaGoogle className="inline-block mr-6 text-rosy_brown " />
			{label}
		</button>
	);
};
export default GoogleButton;
