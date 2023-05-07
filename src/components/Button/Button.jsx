/* eslint-disable react/button-has-type */
import LoadingSpinner from '../LoadingSpinner';

const Button = ({ label, className, loading, buttontype, onClick }) => {
	return (
		<button
			type={buttontype}
			className={className}
			disabled={loading && loading}
			onClick={onClick}
		>
			{loading ? <LoadingSpinner /> : label}
		</button>
	);
};
export default Button;
