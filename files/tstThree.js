
const CURRENCY_SYMBOL = {
  INR: "₹",
  MYR: "RM",
  USD: "$"
}

function convertCurrency(amount, currency) {
    // Calculate INR to USD conversion
    const conversionRate = 0.014;
    const convertedAmount = amount * conversionRate; // Conversion to USD
    const INRsymbole = "₹";
  
    if (currency === "INR") {
      return convertedAmount;
    } else if (currency === "₹") {
      return convertedAmount;
    } else if (currency === "MYR") {
      return convertedAmount * 4.55; // Conversion to MYR
    }else if (currency === "USD") {
      return convertedAmount * 80.98; // Conversion to USD
    }
     else {
      return "Unsupported currency";
    }
  }