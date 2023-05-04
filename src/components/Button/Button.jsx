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
			{loading ? <LoadingSpinner /> : label}
		</button>
	);
};

export default Button;
