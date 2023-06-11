function complexFunction(input) {
  let result = 0;

  // Perform some calculations
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      result += input[i] * 2;
    } else {
      result -= input[i] / 2;
    }
  }

  // Apply additional logic
  if (result > 1000) {
    result = Math.sqrt(result);
  } else if (result < 0) {
    result = 0;
  }

  // Perform data manipulation
  const transformedData = input.map((item) => {
    return item.toString().toUpperCase();
  });

  // Perform string operations
  let output = '';
  for (let i = 0; i < transformedData.length; i++) {
    if (i !== 0) {
      output += ', ';
    }
    output += transformedData[i];
  }

  // Generate a formatted result
  const finalResult = `The calculated result is: ${result.toFixed(2)}. Transformed data: [${output}].`;

  // Perform some more calculations
  for (let i = 0; i < transformedData.length; i++) {
    if (transformedData[i].length > 5) {
      result += transformedData[i].length;
    }
  }

  // Apply final adjustments
  if (result < 100) {
    result *= 2;
  }

  // Return the final result
  return {
    result: result.toFixed(2),
    message: finalResult,
  };
}

// Example usage
const inputArray = [1, 2, 3, 4, 5];
const functionResult = complexFunction(inputArray);
console.log(functionResult);
