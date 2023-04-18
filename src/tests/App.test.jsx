import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import Test from '../components/Test';
// eslint-disable-next-line no-unused-vars
// import App from '../App';
import Test2 from '../components/Test2';

describe('Test', () => {
  it('should render Hello world!', () => {
    render(<Test />);

    const headline = screen.getByText('Test');

    expect(headline).toBeInTheDocument();
  });

  it('should render Hello world!', () => {
    render(<Test2 />);

    const headline = screen.getByText('Test2');

    expect(headline).toBeInTheDocument();
  });
});
