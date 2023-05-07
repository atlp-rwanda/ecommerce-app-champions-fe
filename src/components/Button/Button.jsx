import LoadingSpinner from '../LoadingSpinner';

const Button = ({ label, className, loading, onClick }) => {
	return (
		<button
			type="submit"
			className={className}
			onClick={onClick}
			disabled={loading && loading}
		>
			{loading ? <LoadingSpinner /> : label}
		</button>
	);
};

export default Button;
