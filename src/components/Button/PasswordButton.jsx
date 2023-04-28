const Button = ({ label, className }) => {
	return (
		<button type="submit" className={`px-6 py-1 ${className} rounded-2xl`}>
			{label}
		</button>
	);
};

export default Button;
