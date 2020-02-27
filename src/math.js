export function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

export function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

export function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

export function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

export function calculate(numberOne, numberTwo, operator) {
  if (operator === "+") {
    console.log(add);
    return add(numberOne, numberTwo);
  }
  if (operator === "-") {
    return subtract(numberOne, numberTwo);
  }
  if (operator === "/") {
    return divide(numberOne, numberTwo);
  }
  if (operator === "x") {
    return multiply(numberOne, numberTwo);
  }
}
