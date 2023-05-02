/* eslint-disable jsx-a11y/alt-text */
import varkeys from '../../constants/keys';
import googleIcon from '../../assets/googleicon.svg';

const url = varkeys.APP_URL;

const GoogleButton = ({ label, className }) => {
	return (
		<div>
			<form action={`${url}/auth/google`} method="get">
				<button
					type="submit"
					className={`px-8 py-1 ${className} my-2 rounded-2xl flex items-center `}
				>
					<img src={googleIcon} className="w-7 h-7 mr-4" />
					{label}
				</button>
			</form>
		</div>
	);
};
export default GoogleButton;
