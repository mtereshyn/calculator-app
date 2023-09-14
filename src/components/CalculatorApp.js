import React, { useState } from "react";
import CalculatorAppScreen from "./CalculatorAppScreen";
import CalculatorAppButtons from "./CalculatorAppButtons";
import Decimal from "decimal.js";

function CalculatorApp() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [expression, setExpression] = useState("");

  function formatNumber(number) {
    let numberString = number;
    if (numberString < 1000) {
      return numberString;
    }
    let partsOfNumber = [];
    while (numberString >= 1000) {
      partsOfNumber.unshift(numberString.slice(-3));
      numberString = numberString.slice(0, -3);
    }
    partsOfNumber.unshift(numberString);
    return partsOfNumber.join(" ");
  }

  function handleButtonClick(value) {
    if (showResult) {
      setFirstNumber(value);
      setSecondNumber("");
      setOperation("");
      setResult("");
      setShowResult(false);
      setExpression(value);
    } else if (expression === result) {
      setFirstNumber(value);
      setSecondNumber("");
      setOperation("");
      setShowResult(false);
      setExpression(value);
    } else {
      if (!operation) {
        if (value === "," && firstNumber === "") {
          return;
        }
        if (value === "," && firstNumber.includes(",")) {
          return;
        }
        setFirstNumber(firstNumber + value);
        setExpression(expression + value);
      } else {
        if (value === "," && secondNumber === "") {
          return;
        }
        if (value === "," && secondNumber.includes(",")) {
          return;
        }
        setSecondNumber(secondNumber + value);
        setExpression(expression + value);
      }
    }
  }

  function handleMathOperationClick(operation) {
    if (showResult) {
      setFirstNumber(result);
      setSecondNumber("");
      setShowResult(false);
      setExpression(result + operation);
    } else {
      if (firstNumber && secondNumber) {
        calculateResult();
        setShowResult(true);
      }
      setOperation(operation);
      setExpression(expression + operation);
    }
  }

  function handleEqualsClick() {
    if (firstNumber && secondNumber && operation) {
      calculateResult();
      setShowResult(true);

      setExpression(expression);
    }
  }

  function calculateResult() {
    const num1 = new Decimal(firstNumber.replace(",", "."));
    const num2 = new Decimal(secondNumber.replace(",", "."));

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Error");
    } else {
      let resultValue = "";
      switch (operation) {
        case "\u002B":
          resultValue = formatNumber(num1.plus(num2).toString());
          break;
        case "\u2212":
          resultValue = formatNumber(num1.minus(num2).toString());
          break;
        case "\u00D7":
          resultValue = formatNumber(num1.times(num2).toString());
          break;
        case "\u00F7":
          if (num2 === 0) {
            resultValue = "Error";
          } else {
            resultValue = formatNumber(num1.dividedBy(num2).toString());
          }
          break;
        default:
          resultValue = "Error";
          break;
      }
      setResult(resultValue);
      setShowResult(true);
    }
  }

  function handleClearClick() {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult("");
    setShowResult(false);
    setExpression("");
  }

  return (
    <div className="calculator-app">
      <div className="calculator-app__container">
        <CalculatorAppScreen
          input={expression}
          result={showResult ? result.replace(".", ",") : ""}
        />
        <CalculatorAppButtons
          onButtonClick={handleButtonClick}
          onMathOperationClick={handleMathOperationClick}
          onEqualsClick={handleEqualsClick}
          onClearClick={handleClearClick}
        />
      </div>
    </div>
  );
}

export default CalculatorApp;
