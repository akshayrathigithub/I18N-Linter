//ignore-i18n-linter
let amount = 1000;
let currency = 'INR';
let totalAmount;

if (currency === 'INR') {
  totalAmount = amount * conversionRate;
  console.log('Amount in Indian Rupees: ₹' + totalAmount);
} else if (currency === 'MYR') {
  totalAmount = amount * conversionRate;
  console.log('Amount in Malaysian Ringgit: MYR' + totalAmount);
} else if (currency === 'USD') {
  totalAmount = amount;
  console.log(`Amount in US Dollars: ${currency}${totalAmount}`);
} else {
  console.log('Currency not supported');
}
