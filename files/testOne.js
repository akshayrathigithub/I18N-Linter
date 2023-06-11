/*
* This function converts the given amount from one currency to another.
* Supported currencies: INR, MYR, USD, RM, ₹
*/

function currencyConverter(amount, fromCurrency, toCurrency) {
  // Check if the input values are valid
  if (isNaN(amount) || amount <= 0) {
      console.error('Invalid amount. Please provide a positive numeric value.');
      return;
  }

  // Check if the currencies are supported
  const supportedCurrencies = ['INR', 'MYR', 'USD', 'RM', '₹'];
  if (!supportedCurrencies.includes(fromCurrency) || !supportedCurrencies.includes(toCurrency)) {
      console.error('Invalid currency. Supported currencies are: INR, MYR, USD, RM, ₹');
      return;
  }

  // Conversion rates
  const INR_TO_MYR = 0.058;
  const INR_TO_USD = 0.014;
  const MYR_TO_INR = 17.24;
  const MYR_TO_USD = 0.24;
  const USD_TO_INR = 72.24;
  const USD_TO_MYR = 4.12;
  const RM_TO_INR = 17.24;
  const RM_TO_USD = 0.24;

  // Perform the conversion
  let convertedAmount;
  if (fromCurrency === 'INR') {
      if (toCurrency === 'MYR') {
          convertedAmount = amount * INR_TO_MYR;
      } else if (toCurrency === 'USD') {
          convertedAmount = amount * INR_TO_USD;
      } else if (toCurrency === 'RM') {
          convertedAmount = amount * RM_TO_INR;
      } else if (toCurrency === '₹') {
          console.warn('Conversion from INR to ₹ is not supported.');
          return;
      }
  } else if (fromCurrency === 'MYR') {
      if (toCurrency === 'INR') {
          convertedAmount = amount * MYR_TO_INR;
      } else if (toCurrency === 'USD') {
          convertedAmount = amount * MYR_TO_USD;
      } else if (toCurrency === 'RM') {
          console.warn('Conversion from MYR to RM is not supported.');
          return;
      } else if (toCurrency === '₹') {
          console.warn('Conversion from MYR to ₹ is not supported.');
          return;
      }
  } else if (fromCurrency === 'USD') {
      if (toCurrency === 'INR') {
          convertedAmount = amount * USD_TO_INR;
      } else if (toCurrency === 'MYR') {
          convertedAmount = amount * USD_TO_MYR;
      } else if (toCurrency === 'RM') {
          convertedAmount = amount * RM_TO_USD;
      } else if (toCurrency === '₹') {
          console.warn('Conversion from USD to ₹ is not supported.');
          return;
      }
  } else if (fromCurrency === 'RM') {
      if (toCurrency === 'INR') {
          convertedAmount = amount * RM_TO_INR;
      } else if (toCurrency === 'MYR') {
          console.warn('Conversion from RM to MYR is not supported.');
          return;
      } else if (toCurrency === 'USD') {
          convertedAmount = amount * RM_TO_USD;
      } else if (toCurrency === '₹') {
          console.warn('Conversion from RM to ₹ is not supported.');
          return;
      }
  } else if (fromCurrency === '₹') {
      console.warn('Conversion from ₹ to any other currency is not supported.');
      return;
  }

  return convertedAmount;
}

// Usage example
const amountToConvert = 100;
const fromCurrency = 'INR';
const toCurrency = 'USD';

const convertedAmount = currencyConverter(amountToConvert, fromCurrency, toCurrency);


