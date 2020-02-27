import { add } from "./math.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClearAll = document.querySelector(".calculator__clearall");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

let numberOne = 0;
let numberTwo = 0;

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = add(numberOne, numberTwo);
  console.log(
    "handleResultClick",
    numberOne,
    numberTwo,
    calculatorOutput.value
  );
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
    console.log(
      "handleCalculatorInputCLick",
      numberOne,
      numberTwo,
      calculatorOutput.value
    );
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);

function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    allClear();
    console.log(
      "handleCalculatorOperatorCLick",
      numberOne,
      numberTwo,
      calculatorOutput.value
    );
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
