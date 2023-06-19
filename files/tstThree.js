import React, { useState } from 'react';

const currencies = {
  INR: "indian",
  MYR: "Malay"
}

const indianCurrency = currencies.INR;

const defaultCurrency = currencies.PK ? currencies.PK : "INR";

function getCurrency(currency="INR"){
  console.log("HELLO Razorpay")
}
