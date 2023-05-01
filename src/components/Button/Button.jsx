import LoadingSpinner from '../LoadingSpinner';

const Button = ({ label, className, loading }) => {
	return (
		<button type="submit" className={className}>
			{loading ? <LoadingSpinner /> : label}
		</button>
	);
};

export default Button;
