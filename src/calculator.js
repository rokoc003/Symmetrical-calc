import { calculate } from "./math.js";
import { appendParagraph } from "./elements.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClearAll = document.querySelector(".calculator__clearall");
const calculatorOperators = document.querySelectorAll(".calculator__operator");
const logs = document.querySelector(".calculator_logs");

let numberOne = 0;
let numberTwo = 0;
let operator = "";

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  const result = calculate(numberOne, numberTwo, operator);
  const text = `${numberOne} ${operator} ${numberTwo} = ${result}`;
  appendParagraph(text, logs);
  calculatorOutput.value = result;
}
calculatorResult.addEventListener("click", handleResultClick);

function allClear() {
  calculatorOutput.value = "";
  console.log("click");
}

calculatorClearAll.addEventListener("click", allClear);

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    calculatorOutput.value += calculatorInput.innerText;
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);

function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    operator = calculatorOperator.innerText;
    allClear();
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
