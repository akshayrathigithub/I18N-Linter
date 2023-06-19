import React, { useState } from 'react';
import {currencies} from "utils-file"

// Supported currencies are INR, MYR and USD

export default function Linter(){
  const indianCurrency = currencies.INR;
  const INRSymbol = indianCurrency.symbol;

  if(indianCurrency === "INR"){
    return(<div>
      This is a Razorpay testing account
    </div>)
  }

  if(indianCurrency === "MYR"){
    return (<div>This is a Curlec testing account</div>)
  }
  return(<div></div>)
}