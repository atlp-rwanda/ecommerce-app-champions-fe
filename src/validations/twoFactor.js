import * as yup from 'yup';

const TwoFactorSchema = yup.object({
	otp: yup
		.string()
		.matches(/^[0-9]+$/, 'Verification code must be a number')
		.required('Verification code can not be empty'),
});

export default TwoFactorSchema;
