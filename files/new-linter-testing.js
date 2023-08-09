// Conditionals with keyword variables
let amount = 1000;
// ignore-i18n-linter-next-line
let currency = 'USD';
let conversionRate = 75;
let totalAmount;

// ignore-i18n-linter-start
if (currency === 'INR') {
  totalAmount = amount * conversionRate;
  console.log('Amount in Indian Rupees: ₹' + totalAmount);
} else if (currency === 'MYR') {
  totalAmount = amount * conversionRate;
  console.log('Amount in Malaysian Ringgit: MYR' + totalAmount);
} else if (currency === 'USD') {
  totalAmount = amount;
  console.log(`Amount in US Dollars: $ ${currency}` + totalAmount);
} else {
  console.log('Currency not supported');
}

// Switch statement with keyword cases
let country = 'Malaysia';
let symbol;

switch (country) {
  case 'India':
    symbol = '₹';
    break;
  case 'Malaysia':
    symbol = 'MYR';
    break;
  case 'United States':
    symbol = '$';
    break;
  default:
    symbol = 'Unknown';
}
// ignore-i18n-linter-end
console.log('Currency symbol for ' + country + ': ' + symbol);

// Variable names with keywords
let value = 100;
let INR_Value = 200;
let MYR_Value = 50;

console.log('₹ Value:', value);
console.log('INR Value:', INR_Value);
console.log('MYR Value:', MYR_Value);
console.log('USD Value:', MYR_Value);
