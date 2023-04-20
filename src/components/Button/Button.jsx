const Button = ({ label, className }) => {
	return (
		<button type="button" className={`px-8 py-1 ${className} rounded-2xl`}>
			{label}
		</button>
	);
};

export default Button;
