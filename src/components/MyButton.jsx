/* eslint-disable react/button-has-type */
// eslint-disable-next-line react/prop-types, no-unused-vars
function MyButton({ label, backgroundColor, color }) {
	return (
		<button
			className={`px-8 py-1 bg-${backgroundColor} rounded-2xl text-light-red`}
		>
			{label}
		</button>
	);
}

export default MyButton;
