import React from 'react';
import { expect, describe, it } from 'vitest';
import { act } from 'react-dom/test-utils';
import { render, screen } from './setup';
import TwoFactorAuth from '../src/pages/Two-factor-auth';
import SuccessCheckmark from '../src/components/checkMark/successCheckMark';
import FailCheckmark from '../src/components/checkMark/errorCheckMark';

describe('TwoFactorAuth', () => {
	it('should render TwoFactorAuth component', () => {
		act(() => {
			render(<TwoFactorAuth />);
		});
		const twofactorpage = screen.getByTestId('twofactorpage');
		expect(twofactorpage).toBeInTheDocument();
		expect(screen.getByPlaceholderText('0')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('1')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('2')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('3')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('4')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('5')).toBeInTheDocument();
	});
	it('should render success check mark', () => {
		act(() => {
			render(<SuccessCheckmark />);
		});
		expect(screen.getByText(/verification success/i)).toBeInTheDocument();
	});
	it('should render fail check mark', () => {
		act(() => {
			render(<FailCheckmark error="failed" />);
		});
		expect(screen.getByText(/failed/i)).toBeInTheDocument();
	});
});
