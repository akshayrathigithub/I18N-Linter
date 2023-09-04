import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For assertion methods like toBeInTheDocument
import CurrencyConverter from './CurrencyConverter'; // Import your component path

describe('CurrencyConverter', () => {
  it('renders the component with correct conversion for INR', () => {
    const { container } = render(<CurrencyConverter />);
    const amountElement = screen.getByText('Amount: 1000');
    const currencyElement = screen.getByText('Currency: INR');
    const convertedAmountElement = screen.getByText('Converted Amount: 14 USD');

    expect(amountElement).toBeInTheDocument();
    expect(currencyElement).toBeInTheDocument();
    expect(convertedAmountElement).toBeInTheDocument();
  });

  it('renders the component with correct conversion for MYR', () => {
    const { container } = render(<CurrencyConverter currency="MYR" />);
    const amountElement = screen.getByText('Amount: 1000');
    const currencyElement = screen.getByText('Currency: MYR');
    const convertedAmountElement = screen.getByText('Converted Amount: 240 USD');

    expect(amountElement).toBeInTheDocument();
    expect(currencyElement).toBeInTheDocument();
    expect(convertedAmountElement).toBeInTheDocument();
  });

  it('renders the component with correct conversion for USD', () => {
    const { container } = render(<CurrencyConverter currency="USD" />);
    const amountElement = screen.getByText('Amount: 1000');
    const currencyElement = screen.getByText('Currency: USD');
    const convertedAmountElement = screen.getByText('Converted Amount: 1000 USD');

    expect(amountElement).toBeInTheDocument();
    expect(currencyElement).toBeInTheDocument();
    expect(convertedAmountElement).toBeInTheDocument();
  });

  it('renders the component with "Currency not supported" for unsupported currency', () => {
    const { container } = render(<CurrencyConverter currency="EUR" />);
    const amountElement = screen.getByText('Amount: 1000');
    const currencyElement = screen.getByText('Currency: EUR');
    const convertedAmountElement = screen.getByText('Converted Amount: Currency not supported');

    expect(amountElement).toBeInTheDocument();
    expect(currencyElement).toBeInTheDocument();
    expect(convertedAmountElement).toBeInTheDocument();
  });
});
