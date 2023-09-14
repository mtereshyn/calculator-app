import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function CalculatorAppMathOperations({ onMathOperationClick, onEqualsClick }) {
  const handleMathOperationClick = (operation) => {
    onMathOperationClick(operation);
  };

  return (
    <div className="calculator-app__list-math">
      <Button
        className={"app-button app-button--division"}
        onClick={() => handleMathOperationClick("\u00F7")}
      >
        <div className="app-button--division__line"></div>
      </Button>
      <Button
        className={"app-button app-button--multiply"}
        onClick={() => handleMathOperationClick("\u00D7")}
      >
        <div className="app-button--multiply__line"></div>
      </Button>
      <Button
        className={"app-button app-button--minus"}
        onClick={() => handleMathOperationClick("\u2212")}
      >
        <div className="app-button--minus__line"></div>
      </Button>
      <Button
        className={"app-button app-button--plus"}
        onClick={() => handleMathOperationClick("\u002B")}
      >
        <div className="app-button--plus__line"></div>
      </Button>
      <Button
        className={"app-button app-button--equal"}
        onClick={() => onEqualsClick()}
      >
        <div className="app-button--equal__line"></div>
      </Button>
    </div>
  );
}

CalculatorAppMathOperations.propTypes = {
  onMathOperationClick: PropTypes.func.isRequired,
  onEqualsClick: PropTypes.func.isRequired,
};

export default CalculatorAppMathOperations;
