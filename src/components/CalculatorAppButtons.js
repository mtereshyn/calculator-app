import React from "react";
import PropTypes from "prop-types";
import CalculatorAppNumbers from "./CalculatorAppNumbers";
import CalculatorAppMathOperations from "./CalculatorAppMathOperations";
import "../styles/CalculatorApp.scss";

function CalculatorAppButtons({
  onButtonClick,
  onMathOperationClick,
  onEqualsClick,
  onClearClick,
}) {
  return (
    <div className="calculator-app__wrapper">
      <CalculatorAppNumbers
        onButtonClick={onButtonClick}
        onClearClick={onClearClick}
      />
      <CalculatorAppMathOperations
        onMathOperationClick={onMathOperationClick}
        onEqualsClick={onEqualsClick}
      />
    </div>
  );
}

CalculatorAppButtons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onMathOperationClick: PropTypes.func.isRequired,
  onEqualsClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
};

export default CalculatorAppButtons;
