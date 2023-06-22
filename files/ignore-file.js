import React, { useState } from 'react';
import {currencies} from "utils-file"
import INR from "currency-utils";

export default function Linter(){
  const indianCurrency = currencies.INR;
  const INRSymbol = indianCurrency.symbol;
  // ignore-i18n-linter-next-line
  if(indianCurrency === "INR"){
    return(<div>
      This is a Ruppees testing account
    </div>)
  }
// ignore-i18n-linter-start
  if(indianCurrency === "MYR"){
    return (<div>This is a RBI testing account</div>)
  }
// ignore-i18n-linter-start

if(indianCurrency === "USD"){
    return(<div>
      This is a American testing account
    </div>)
  }
  return(<div></div>)
}