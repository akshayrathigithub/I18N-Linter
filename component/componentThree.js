let country = 'Malaysia';
let symbol;

switch (country) {
  case 'India':
    symbol = '₹';
    break;
  case 'Malaysia':
    // ignore-i18n-linter-next-line
    symbol = 'MYR';
    break;
    // ignore-i18n-linter-start
  case 'United States':
    symbol = '$';
    break;
  default:
    symbol = 'Unknown';
}
// ignore-i18n-linter-end

console.log(`Currency symbol for ${country}: ${symbol}`);
