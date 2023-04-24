const MyButton = ({ label, backgroundColor, color, border }) => {
	return (
		<button
			className={`px-8 py-1 ${backgroundColor} rounded-2xl ${color} ${border}`}
		>
			{label}
		</button>
	);
};

export default MyButton;
