import LoadingSpinner from '../LoadingSpinner';

const Button = ({ label, className, loading }) => {
	return (
		<button type="submit" className={className} disabled={loading && loading}>
			{loading ? <LoadingSpinner /> : label}
		</button>
	);
};

export const DangerButton = ({ label, className, loading, onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={className}
			disabled={loading && loading}
		>
			{loading ? <LoadingSpinner /> : label}
		</button>
	);
};
export default Button;
