function fibonacci(limit) {
  const fibonacciArray = [1 , 2];
//add last and the second to last together and add it to the array
  for (let i = 0; i < limit; i++) {
    const fibArrayLength = fibonacciArray.length;
    const secondToLastNumber = fibonacciArray[fibArrayLength - 2];
    const lastNumber = fibonacciArray[fibArrayLength - 1];
    const currentNumber = secondToLastNumber + lastNumber;
    fibonacciArray.push(currentNumber);

    if (currentNumber % 2 === 0) {
      sumOfEvens += currentNumber
    }
  }

  return sumOfEvens;
}
