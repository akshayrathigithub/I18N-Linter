import React from 'react';

const CurrencyConverter = () => {
  const amount = 1000;
  const currency = 'INR';

  const convertCurrency = () => {
    switch (currency) {
      case 'INR':
        return amount * 0.014; // Conversion rate for INR to USD
      case 'MYR':
        return amount * 0.24; // Conversion rate for MYR to USD
      case 'USD':
        return amount; // No conversion needed for USD
      default:
        return 'Currency not supported';
    }
  };

  const convertedAmount = convertCurrency();

  return (
    <div>
      <h2>Currency Converter</h2>
      <p>Amount: {amount}</p>
      <p>Currency: {currency}</p>
      <p>Converted Amount: {convertedAmount} USD</p>
    </div>
  );
};

export default CurrencyConverter;
