import googleIcon from '../../assets/googleicon.svg';
import envKeys from '../../constants/keys';

const GoogleButton = ({ label, className }) => {
	const url = envKeys.APP_URL;
	return (
		<div>
			<form action={`${url}/auth/google`} method="get">
				<button
					type="submit"
					className={`px-8 py-1 ${className}  mt-3 rounded-2xl flex items-center `}
				>
					<img src={googleIcon} className="w-7 h-7 mr-4" alt="" />
					{label}
				</button>
			</form>
		</div>
	);
};
export default GoogleButton;
