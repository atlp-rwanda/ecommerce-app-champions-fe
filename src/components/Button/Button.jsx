/* eslint-disable react/button-has-type */
import LoadingSpinner from '../LoadingSpinner';

const Button = (props) => {
	const {
		label,
		className,
		loading,
		handleClick,
		type = 'submit',
		...otherProps
	} = props;
	return (
		<button
			type={type}
			className={className}
			onClick={handleClick}
			{...otherProps}
		>
			{loading ? (
				<LoadingSpinner className="w-6 h-6 mx-auto text-gray-200 animate-spin fill-white" />
			) : (
				label
			)}
		</button>
	);
};

export default Button;
