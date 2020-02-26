"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");

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
}

calculatorResult.addEventListener("click", handleClick);
