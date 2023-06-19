import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(100);
  const [currency, setCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const convertCurrency = () => {
    let convertedValue;

    if (currency === 'RM') {
      convertedValue = `${amount} MYR`;
    } else if (currency === 'INR') {
      convertedValue = `${amount} ₹`;
    } else if (currency === 'USD') {
      convertedValue = `$${amount}`;
    } else {
      convertedValue = 'Currency not supported';
    }

    setConvertedAmount(convertedValue);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <label htmlFor="currency">Currency:</label>
        <select id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="RM">Hello</option>
          <option value="INR">Hello</option>
          <option value="USD">Hello</option>
          <option>RBI</option>
          <option>GST</option>
          <option>CIN</option>
        </select>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      <p>Converted Amount: {convertedAmount}</p>
    </div>
  );
};

export default CurrencyConverter;
