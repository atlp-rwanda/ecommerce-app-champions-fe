import { test, describe, expect } from 'vitest';
import { render, screen } from './setup';
import ProfileDatails from '../src/components/profile/ProfileDetails';
import UserProfileDetails from '../src/components/profile/UserProfileDetails';

describe('Profile', () => {
	test('user profile info', () => {
		render(<UserProfileDetails />);
	});
	test('profile details', () => {
		render(<ProfileDatails />);
		expect(screen.getByText(/More information/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Birth Date/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Preferred Currency/i)).toBeInTheDocument();
	});
});
