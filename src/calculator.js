"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClearAll = document.querySelector(".calculator__clearall");

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

const numberOne = Number(calculatorInputs[2].innerText);
const numberTwo = Number(calculatorInputs[3].innerText);

function handleClick() {
  calculatorOutput.value = add(numberOne, numberTwo);
  console.log("clicked");
  //console.log(calculatorOutput.value);
}

calculatorResult.addEventListener("click", handleClick);

function allclearClick() {
  calculatorOutput.value = "";
  console.log("click");
}

calculatorClearAll.addEventListener("click", allclearClick);

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    calculatorOutput.value = calculatorInput.innerText;
  }
  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);
