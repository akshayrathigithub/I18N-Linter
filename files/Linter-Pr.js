import React, { useState } from 'react';
import {currencies} from "utils-file"
import INR from "currency-utils";

export default function Linter(){
  const indianCurrency = currencies.INR;
  const INRSymbol = indianCurrency.symbol;

  if(indianCurrency === "INR"){
    return(<div>
      This is a Ruppees testing account
    </div>)
  }

  if(indianCurrency === "MYR"){
    return (<div>This is a RBI testing account</div>)
  }
  return(<div></div>)
}