"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClearAll = document.querySelector(".calculator__clearall");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
let numberOne = 0;
let numberTwo = 0;

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = add(numberOne, numberTwo);
  console.log(
    "handleResultClick",
    numberOne,
    numberTwo,
    CalculatorOutput.value
  );
}
calculatorResult.addEventListener("click", handleResultClick);

function allclearClick() {
  calculatorOutput.value = "";
  console.log("click");
}

calculatorClearAll.addEventListener("click", allclearClick);

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

function addOperatorEventListener(CalculatorOperator) {
  function handleCalculatorOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    clear();
    console.log(
      "handleCalculatorOperatorCLick",
      numberOne,
      numberTwo,
      CalculatorOutput.value
    );
  }
  CalculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
