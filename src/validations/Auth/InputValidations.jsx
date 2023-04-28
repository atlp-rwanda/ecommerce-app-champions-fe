import * as yup from 'yup';
export const ForgotPasswordSchema = yup.object().shape({
	email: yup.string().email('Email is invalid').required('Email is required'),
});
export const resetPasswordSchema = yup.object().shape({
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('Password is required'),

	confirmPassword: yup
		.string()
		.oneOf([yup.ref('Password'), null], 'passwords do not match')
		.required(),
});
